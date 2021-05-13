<script lang="ts">
	import Nav from "$lib/nav.svelte";
</script>

<main>
	<Nav />
	<section>
		<slot />
	</section>
</main>

<style lang="scss" global>
	@import "../lib/scss/devices";
	@import "../lib/scss/article";

	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-template-areas: "content";
		@include for-tablet-portrait-up {
			grid-template-rows: 4em 1fr;
			grid-template-areas:
				"nav"
				"content";
		}

		section {
			grid-area: content;
			width: 100vw;
			max-width: 1200px;
			margin: auto;
			font-size: 1.5rem;
		}
	}
</style>
