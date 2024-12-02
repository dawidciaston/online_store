import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Export Vite configuration using the defineConfig helper.
export default defineConfig(() => {
    return {
        build: {
            // Automatically cleans the output directory
            emptyOutDir: true,
        },
        plugins: [react()],
        // Path aliases for simplifying imports
        resolve: {
            alias: {
                images: '/images',
                src: '/src',
                components: '/src/components',
                modules: '/src/modules',
                routes: '/src/routes',
                styles: '/src/styles'
            }
        }
    };
});
