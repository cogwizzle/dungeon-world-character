const esbuild = require('esbuild')
const { execSync } = require('child_process')

execSync('rm *.js')
execSync('rm *.map')

execSync(
  'npx tailwindcss -i ./client/src/tailwind.css -o ./client/www/tailwind.css'
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
    target: ['es2020'],
    watch: false,
    splitting: true,
    outdir: 'client/www',
  })
  .then(() => {
    execSync('workbox generateSW')
    execSync('surge', {
      cwd: 'client/www',
    })
    process.exit(0)
  })
  .catch(() => process.exit(1))
