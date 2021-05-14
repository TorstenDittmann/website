<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Avatar from "$lib/assets/avatar.webp";
</script>

<svelte:head>
	<title>Torsten Dittmann - dittmann.dev</title>
</svelte:head>

<div class="intro">
  <h1>Site is WIP</h1>
  <h2>Torsten Dittmann</h2>
  <img class="avatar" src={Avatar} alt="Torsten Dittmann" />
  <h2>Software Developer</h2>
  <p>
    A creative and pragmatic way of thinking distinguishes me beside my positively balanced
    nature.
  </p>
</div>

<style lang="scss">
	.intro {
		text-align: center;
	}
	.avatar {
		max-width: 25vw;
		border-radius: 100%;
	}
</style>
