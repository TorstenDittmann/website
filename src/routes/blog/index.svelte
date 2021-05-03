<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const prerender = true;
	export const load: Load = async ({ fetch }) => {
		const res = await fetch("/blog.json");
		if (res.ok) {
			const posts = await res.json();
			return {
				props: { posts }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import Transition from "$lib/transition.svelte";
import type { Article } from "./article";
	import Post from "./_post.svelte";

	export let posts: Article[];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<Transition>
	{#each posts as article}
	<Post {article} />
{/each}
</Transition>
