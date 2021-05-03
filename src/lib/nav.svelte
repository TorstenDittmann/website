<script lang="ts">
	import { navigating, page } from "$app/stores";

	let open = false;

	navigating.subscribe(() => (open = false));
</script>

<span class="menu" class:open on:click={() => (open = true)}>🍔</span>

<nav class:open>
	<a href="/" class:active={$page.path === '/'}>About</a>
	<a href="/blog" class:active={$page.path.startsWith('/blog')}>Blog</a>
	<a href="/projects" class:active={$page.path.startsWith('/projects')}>Projects</a>
	<a href="/contact" class:active={$page.path === '/contact'}>Contact</a>
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

			* {
				display: initial;
			}
		}

		a,
		span {
			cursor: pointer;
			line-height: 8rem;
			width: 100%;
			text-align: center;
			text-transform: uppercase;
			font-size: 2rem;
			padding: 0 1rem;
			text-decoration: none;
			color: black;
			background-color: white;
			display: none;

			@include for-tablet-portrait-up {
				line-height: 4rem;
				display: initial;
			}

			&.active {
				color: white;
				background-color: black;
			}

			&:hover {
				color: white;
				background: linear-gradient(270deg, #246655, #111212, #730b8a, #ae3000);
				background-size: 800% 800%;
				animation: NavHover 3s ease infinite;
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

	@-webkit-keyframes NavHover {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes NavHover {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes NavHover {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
