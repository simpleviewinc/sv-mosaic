import path from "path";
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
        setupFiles: [path.resolve(__dirname, "setup.mts")],
		deps: {
			optimizer: {
				web: {
					include: ['vitest-canvas-mock'],
				},
			},
		},
	},
});
