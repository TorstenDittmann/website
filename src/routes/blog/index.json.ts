import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	const request = await fetch("https://dev.to/api/articles/me/published", {
		headers: {
			api_key: import.meta.env.VITE_API_KEY.toString()
		}
	});

	return {
		body: await request.json()
	};
};
