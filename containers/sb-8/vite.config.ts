import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
	],
	resolve: {
		alias: {
			"@root": path.resolve(__dirname, "../mosaic/src"),
			"@components": path.resolve(__dirname, "components"),
		},
	},
});
