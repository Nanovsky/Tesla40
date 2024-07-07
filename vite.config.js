import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({command, mode, ssrBuild}) => {
    return {
        base: "/Tesla40/"
    };
});