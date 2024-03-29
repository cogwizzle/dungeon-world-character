const esbuild = require('esbuild')
const { exec, execSync } = require('child_process')
const http = require('http')
const fs = require('fs')

exec(
  'npx tailwindcss -i ./src/tailwind.css -o ./www/tailwind.css --watch',
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  }
)

esbuild
  .serve(
    {
      servedir: 'www',
      port: 3001,
    },
    {
      entryPoints: ['src/index.js'],
      format: 'esm',
      loader: {
        '.html': 'text',
      },
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2020'],
      splitting: true,
      outdir: 'www',
    }
  )
  .then((result) => {
    if (fs.existsSync('www/sw.js')) execSync('rm www/sw.js')
    if (fs.existsSync('www/sw.js.map')) execSync('rm www/sw.js.map')
    // The result tells us where esbuild's local server is
    const { host, port } = result

    // Then start a proxy server on port 3000
    http
      .createServer((req, res) => {
        const options = {
          hostname: host,
          port: port,
          path: req.url,
          method: req.method,
          headers: req.headers,
        }

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, (proxyRes) => {
          // If esbuild returns "not found", send a custom 404 page
          if (proxyRes.statusCode === 404) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>A custom 404 page</h1>')
            return
          }

          // Otherwise, forward the response from esbuild to the client
          res.writeHead(proxyRes.statusCode, proxyRes.headers)
          proxyRes.pipe(res, { end: true })
        })

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true })
      })
      .listen(3000)
    console.log('Listening on port 3000')
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
