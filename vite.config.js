import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

const getDevServer = () => {
    if (process.env.USER === 'gitpod') {
        return `3000-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`
    }
}

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
                    'primary-color': '#699429',
                    'screen-xs': '360px',
                    'screen-sm': '640px',
                    'screen-md': '768px',
                    'screen-lg': '1024px',
                    'screen-xl': '1280px'
                }
            }
        }
    },
    server: {
        https: false,
        host: 'localhost',
        hmr: {
            protocol: 'wss',
            host: getDevServer(),
            clientPort: 443
        }
    }
});
