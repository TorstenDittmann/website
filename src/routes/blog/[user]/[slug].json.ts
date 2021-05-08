import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }) => {
	const { slug, user } = params;
	const request = await fetch(`https://dev.to/api/articles/${user}/${slug}`);
	return {
		body: await request.json()
	};
};
