import {defineConfig} from 'vite';
import laravel, {refreshPaths} from 'laravel-vite-plugin';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    basicSsl(),
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/js/bootstrap.js',
        'resources/js/search.js',
      ],
      refresh: [
        ...refreshPaths,
        'tailwind.config.js',
        'app/Livewire/**',
        'app/Http/Inertia/**',
      ],
    }),
  ],
  server: {
    https: true,
    host: "winwinwomen.test",
    valetTls: {
      enable: true,
      path: '/home/steve/.valet/Certificates/',
      host: 'winwinwomen.test'
    },
    watch: {
      ignored: [
        './vendor/**',
      ],
    },
  },
});
