<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const prerender = true;
	export const load: Load = async ({ fetch, page }) => {
		const { user, slug } = page.params;
		const res = await fetch(`/blog/${user}/${slug}.json`);
		if (res.ok) {
			const post = await res.json();
			return {
				props: { post }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<svelte:head>
	<title>{post.title} - dittmann.dev</title>
</svelte:head>

<script lang="ts">
	import micromark from "micromark";
	import gfmSyntax from "micromark-extension-gfm";
	import gfmHtml from "micromark-extension-gfm/html.js";
	import type { Options } from "micromark/dist/shared-types";
	import type { Article } from "../article";

	export let post: Article;

	const options: Options = {
		extensions: [gfmSyntax()],
		htmlExtensions: [gfmHtml]
	};

	const dateFormat = new Intl.DateTimeFormat("en", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	});

	const toDate = (timestamp: string) => dateFormat.format(new Date(timestamp));
</script>

<h1>{post.title}</h1>
<img class="cover" src={post.cover_image} alt={post.title} />
<div class="subtitle">
	<span>{toDate(post.published_timestamp)}</span> - Originally posted on
	<a href={post.url}>Dev.to</a>
</div>
<hr />
<article>
	{@html micromark(post.body_markdown, options)}
</article>

<style>
	h1 {
		margin: 3rem 0;
		font-size: 3rem;
	}
	img.cover {
		width: 100%;
	}
	div.subtitle {
		color: grey;
		margin-top: 2rem;
		display: block;
	}

	div.subtitle span {
		font-style: italic;
	}
</style>
