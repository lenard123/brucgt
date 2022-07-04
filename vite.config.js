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
                    'primary-color': '#699429'
                }
            }
        }
    },
    server: {
        https: false,
        host: 'localhost',
        hmr: {
            host: getDevServer(),
            clientPort: 443
        }
    }
});
