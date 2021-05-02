<script lang="ts">
	import type { Article } from "./article";

	export let article: Article;

	const dateFormat = new Intl.DateTimeFormat("en", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	});

	const toDate = (timestamp) => dateFormat.format(new Date(timestamp));
</script>

<a href={`blog${article.path}`}>
	<h2>{article.title}</h2>
	<p>{toDate(article.published_timestamp)}</p>
</a>
<hr>

<style>
	a {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		text-decoration: none;
		color: black;
	}

	a h2 {
		margin: 0;
	}

	a p {
		margin: 0.5rem;
	}
</style>
