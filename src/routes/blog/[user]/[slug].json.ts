import type { RequestHandler } from "@sveltejs/kit";
import type { Article } from "../article";

const filter = (request: Article) => {
	request.body_html = request.body_html.replace(/href="\//g, `target="_blank" href="https://dev.to/`);
	return request;
};

export const get: RequestHandler = async ({ params }) => {
	const { slug, user } = params;
	const request = await fetch(`https://dev.to/api/articles/${user}/${slug}`);
	return {
		body: filter(await request.json())
	};
};
