import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'one',
  webDir: '../../dist/apps/one',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
