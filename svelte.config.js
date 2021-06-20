import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [".svelte"],
	preprocess: [preprocess()],
	kit: {
		target: "#svelte",
		adapter: vercel()
	}
};
