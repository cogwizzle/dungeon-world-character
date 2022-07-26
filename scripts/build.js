const esbuild = require('esbuild')
const { exec, execSync } = require('child_process')
const { generateSW } = require('workbox-build')
const workboxConfig = require('../workbox-config')

exec(
  'npx tailwindcss -i ./src/tailwind.css -o ./www/tailwind.css',
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
    watch: false,
    splitting: true,
    outdir: 'www',
  })
  .then(() => {
    generateSW(workboxConfig)
    execSync('surge', {
      cwd: 'www',
    })
    process.exit(0)
  })
  .catch(() => process.exit(1))
