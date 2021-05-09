<script lang="ts">
	import { onMount } from "svelte";

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

<h1>Contrast Checker</h1>
<form on:change={calculate} on:submit|preventDefault={calculate}>
	<label for="">
		Foreground:
		<input type="color" bind:value={foreground} />
		<input type="text" bind:value={foreground} />
	</label>
	<label for="">
		Background:
		<input type="color" bind:value={background} />
		<input type="text" bind:value={background} />
	</label>
</form>
<h2>Ration</h2>
<h3>{ratio}</h3>

<h2>Normal Text</h2>
<p>
	AA: {#if check(ratio, criteria.aaNormal)}🟢{:else}🔴{/if}
</p>
<p>
	AAA: {#if check(ratio, criteria.aaaNormal)}🟢{:else}🔴{/if}
</p>
<h2>Large Text</h2>
<p>
	AA: {#if check(ratio, criteria.aaLarge)}🟢{:else}🔴{/if}
</p>
<p>
	AAA: {#if check(ratio, criteria.aaaLarge)}🟢{:else}🔴{/if}
</p>
<h2>Graphical Objects and User Interface Components</h2>
<p>
	AA: {#if check(ratio, criteria.graphics)}🟢{:else}🔴{/if}
</p>
