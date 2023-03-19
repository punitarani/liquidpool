<script>
	import get_existing_pools from './ExistingPools.ts';

	export let ready = false;
	let pools = null;

	function clickHandler() {
		get_existing_pools().then((data) => {
			pools = data;
			console.log(pools);
		});
	}
</script>

{#if pools}
	<select class="select" size="5">
		{#each pools as pool}
			<option value={pool['reference']}>{pool['contractAddress']}</option>
		{/each}
	</select>
{:else if ready}
	<button class="btn btn-base variant-filled" on:click={clickHandler}>Load Pools</button>
{:else}
	<div>
		<p>Connect wallet to view pools.</p>
	</div>
{/if}
