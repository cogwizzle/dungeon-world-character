const esbuild = require('esbuild')
const { exec, execSync } = require('child_process')

exec(
  'npx tailwindcss -i ./client/src/tailwind.css -o ./client/www/tailwind.css --watch',
  (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(stdout)
    console.error(stderr)
  }
)

esbuild
  .build({
    entryPoints: ['client/src/index.js'],
    format: 'esm',
    loader: {
      '.html': 'text',
    },
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['es2020'],
    splitting: true,
    outdir: 'client/www/scripts',
    watch: true,
  })
  .then(() => {
    exec('nodemon server/app.js', (err, stdout, stderr) => {
      if (err) {
        console.log(`error: ${err.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  })
  .catch((error) => {
    if (error) console.error(error)
  })
