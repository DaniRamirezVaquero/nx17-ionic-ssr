import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'two',
  webDir: '../../dist/apps/two',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
