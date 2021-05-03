<script lang="ts">
	import { navigating } from "$app/stores";

	let open = false;

	navigating.subscribe(() => (open = false));
</script>

<span class="menu" class:open on:click={() => (open = true)}>🍔</span>

<nav class:open>
	<a href="/">About</a>
	<a href="/blog">Blog</a>
	<a href="/projects">Projects</a>
	<a href="/contact">Contact</a>
	<span class="hamburger" on:click={() => (open = false)}>╳</span>
</nav>

<style lang="scss">
	@import "./scss/devices";

	span.menu {
		position: fixed;
		margin: 1rem;
		bottom: 0;
		right: 0;
		font-size: 3rem;
		cursor: pointer;

		&.open {
			display: none;
		}
		@include for-tablet-portrait-up {
			display: none;
		}
	}

	nav {
		width: 100vw;
		position: fixed;
		display: flex;
		flex-direction: column;
		background-color: white;
		justify-content: space-evenly;
		height: 0;
		opacity: 0;

		@include for-tablet-portrait-up {
			opacity: 1;
			position: initial;
			flex-direction: row;
			height: 4rem;
			align-items: center;
			grid-area: nav;
		}

		&.open {
			height: 100vh;
			opacity: 1;
			animation: bounce-in 500ms ease 0s 1 normal;
		}

		a,
		span {
			cursor: pointer;
			line-height: 8rem;
			min-width: 6rem;
			text-align: center;
			text-transform: uppercase;
			font-size: 2rem;
			padding: 0 1rem;
			text-decoration: none;
			color: black;
			background-color: white;

			@include for-tablet-portrait-up {
				line-height: 4rem;
			}

			&:hover {
				color: white;
				background-color: black;
			}
		}
		span.hamburger {
			@include for-tablet-portrait-up {
				display: none;
			}
		}
	}

	@keyframes bounce-in {
		0% {
			opacity: 0;
			transform: scale(0.3);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
