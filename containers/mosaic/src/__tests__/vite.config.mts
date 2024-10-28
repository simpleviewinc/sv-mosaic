import path from "path";
import { configDefaults, defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		globalSetup: path.resolve(__dirname, "./vitest.global-setup.ts"),
		environment: "jsdom",
        setupFiles: [path.resolve(__dirname, "setup.mts")],
		deps: {
			optimizer: {
				web: {
					include: ["vitest-canvas-mock"],
				},
			},
		},
		coverage: {
			provider: "istanbul",
			exclude: [
				...configDefaults.coverage.exclude,
				"scripts/*",
			],
		},
	},
});
