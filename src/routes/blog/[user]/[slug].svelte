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

<script lang="ts">
	import type { Article } from "../article";
	import { onMount } from "svelte";
	import highlight from "highlight.js";
	const { highlightAll } = highlight;
	export let post: Article;

	const dateFormat = new Intl.DateTimeFormat("en", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	});

	const toDate = (timestamp: string) => dateFormat.format(new Date(timestamp));

	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	<title>{post.title} - dittmann.dev</title>
</svelte:head>

<h1>{post.title}</h1>
<img class="cover" src={post.cover_image} alt={post.title} />
<div class="subtitle">
	<span>{toDate(post.published_timestamp)}</span> - Originally posted on
	<a href={post.url}>Dev.to</a>
</div>
<hr />
<article class="post">
	{@html post.body_html}
</article>

<style lang="scss">
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
