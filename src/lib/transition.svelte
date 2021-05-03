<script>
	import { fly } from "svelte/transition";

    const flyIn = { y: -50, duration: 150, delay: 150 }
    const flyOut = { y: 50, duration: 150 }
</script>

<div in:fly={flyIn} out:fly={flyOut} >
	<slot />
</div>
