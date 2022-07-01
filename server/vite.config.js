import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        laravel([
            'resources/js/main.jsx',
        ]),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#699429'
                }
            }
        }
    },
    server: {
        https: false,
        host: 'localhost',
        hmr: {
            host: '3000-lenard123-brucgt-anw65a4gdds.ws-us51.gitpod.io',
            clientPort: 443
        }
    }
});
