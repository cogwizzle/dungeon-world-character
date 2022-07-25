const esbuild = require('esbuild')
const { exec } = require('child_process')
const http = require('http')

exec(
  'npx tailwindcss -i ./src/tailwind.css -o ./www/tailwind.css --watch',
  (err, stdout, stderr) => {
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
  .build(
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
  .catch((error) => {
    console.error(error)
  })
