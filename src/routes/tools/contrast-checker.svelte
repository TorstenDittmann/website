<script lang="ts">
	import { onMount } from "svelte";

	let fullscreen = false;

	let foreground = "#000000";
	let background = "#FFFFFF";
	let ratio = 1;

	const criteria = {
		aaNormal: 4.5,
		aaLarge: 3.0,
		aaaNormal: 7.0,
		aaaLarge: 4.5,
		graphics: 3.0
	};

	const calculate = (): void => {
		if ([foreground, background].some((color) => color.length !== 7)) {
			return;
		}
		const colors = [foreground, background]
			.map(toRGB)
			.map(relativeLuminanceW3C)
			.sort((a, b) => b - a);
		ratio = (colors[0] + 0.05) / (colors[1] + 0.05);
	};

	const check = (ratio: number, min: number): boolean => ratio > min;

	const toRGB = (hex: string): number[] =>
		hex
			.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => "#" + r + r + g + g + b + b)
			.substring(1)
			.match(/.{2}/g)
			.map((x) => parseInt(x, 16));

	const relativeLuminanceW3C = (rgb: number[]) => {
		var RsRGB = rgb[0] / 255;
		var GsRGB = rgb[1] / 255;
		var BsRGB = rgb[2] / 255;

		var R = RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
		var G = GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
		var B = BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

		// For the sRGB colorspace, the relative luminance of a color is defined as:
		var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

		return L;
	};

	onMount(calculate);
</script>

<svelte:head>
	<title>Contrast Checker - dittmann.dev</title>
</svelte:head>

<h1>Contrast Checker</h1>
<div class="contrast-checker" class:fullscreen>
	<form on:change={calculate} on:submit|preventDefault={calculate}>
		<label for="foreground">
			<h2>Foreground</h2>
			<span>
				<input id="foreground" type="color" bind:value={foreground} />
				<input type="text" bind:value={foreground} />
			</span>
		</label>
		<label for="background">
			<h2>Background</h2>
			<span>
				<input id="background" type="color" bind:value={background} />
				<input type="text" bind:value={background} />
			</span>
		</label>
		<h2>Ratio</h2>
		<h3>{ratio}</h3>
		<div class="checks">
			<div>
				<b>Normal</b>
				<p class:active={check(ratio, criteria.aaNormal)}>AA</p>
				<p class:active={check(ratio, criteria.aaaNormal)}>AAA</p>
			</div>
			<div>
				<b>Large</b>
				<p class:active={check(ratio, criteria.aaLarge)}>AA</p>
				<p class:active={check(ratio, criteria.aaaLarge)}>AAA</p>
			</div>
			<div>
				<b>UI</b>
				<p class:active={check(ratio, criteria.graphics)}>AA</p>
			</div>
		</div>
		<hr />
		<div class="info">
			<p>
				This tool follows the Web Content Accessibility Guidelines (WCAG), which are a series of
				recommendations for making the web more accessible.
			</p>
			<p>
				Regarding colors, the standard defines two levels of contrast ratio: AA (minimum contrast)
				and AAA (enhanced contrast).
			</p>
			<p>
				The level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large
				text (at least 18pt) or bold text.
			</p>
			<p>
				The level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large
				text or bold text.
			</p>
			<p>
				<a href="https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines" target="_blank"
					>Learn More</a
				>
			</p>
		</div>
	</form>
	<div class="preview" style={`background-color: ${background};`}>
		<h1 style={`color: ${foreground};`}>Lorem Ipsum</h1>
		<p style={`color: ${foreground};`}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem illum explicabo,
			obcaecati perferendis saepe nesciunt magni dolorum consequatur sit.
		</p>
	</div>
</div>

<style lang="scss">
	.contrast-checker {
		display: flex;
		gap: 1rem;
		border-radius: 1rem;

		&.fullscreen {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
			background-color: white;
			height: 100vh;
			width: 100vw;
		}

		form {
			max-width: 33vw;
			width: 100%;

			label {
				display: flex;
				flex-direction: column;
				align-items: center;

				span {
					display: flex;
					input {
						padding: 0;
						border: none;
						border-bottom: 2px black solid;

						&[type="color"] {
							width: 2rem;
							height: 2rem;
						}
					}
				}

				h2 {
					margin: 0.5rem;
				}
			}
			hr {
				margin: 2rem 0;
			}
			.info p {
				font-size: 1rem;
			}
		}

		.preview {
			position: sticky;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			padding: 2rem;
		}
		.checks {
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			text-align: center;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			p {
				background-color: palevioletred;
				padding: 1rem;
				width: 100%;
				margin: 0;
				&.active {
					background-color: aquamarine;
				}
			}
		}
	}
</style>
