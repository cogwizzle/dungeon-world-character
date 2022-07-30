import { chromeLauncher } from '@web/test-runner'
import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  browsers: [chromeLauncher({ launchOptions: { args: ['--no-sandbox'] } })],
  plugins: [
    esbuildPlugin({
      format: 'esm',
      loaders: {
        '.html': 'text',
      },
    }),
  ],
}
