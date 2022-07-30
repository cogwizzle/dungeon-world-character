import { chromeLauncher } from '@web/test-runner'

export default {
  browsers: [chromeLauncher({ launchOptions: { args: ['--no-sandbox'] } })],
  
}
