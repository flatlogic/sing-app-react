const {defineConfig} = require('@playwright/test');
const dev = Boolean(process.env.PLAYWRIGHT_DEV);
module.exports = defineConfig({
  testDir:'./tests',testMatch:'**/*.spec.js',workers:1,timeout:60000,
  use:{actionTimeout:10000,navigationTimeout:20000,channel:'chrome',baseURL:'http://127.0.0.1:4334/sing-app-react/',viewport:{width:1440,height:1000}},
  webServer:{command:dev ? 'npx cross-env REACT_APP_BACKEND=true vite --host 127.0.0.1 --port 4334 --strictPort' : 'npm run preview -- --port 4334 --strictPort',url:'http://127.0.0.1:4334/sing-app-react/'}
});
