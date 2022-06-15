const esbuild = require('esbuild')
const { exec } = require('child_process')

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
  .build({
    entryPoints: ['src/index.js'],
    format: 'esm',
    loader: {
      '.html': 'text',
    },
    bundle: true,
    minify: true,
    target: ['es2020'],
    watch: true,
    splitting: true,
    outdir: 'www',
  })
  .catch(() => process.exit(1))
