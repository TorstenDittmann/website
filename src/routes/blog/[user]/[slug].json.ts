import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }) => {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug, user } = params;

	const request = await fetch(`https://dev.to/api/articles/${user}/${slug}`);
	return {
		body: await request.json()
	};
};
