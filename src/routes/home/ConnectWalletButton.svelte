<script>
	let user_account = null;

	// Connect MetaMask Wallet
	async function connect_wallet_handler() {}
</script>

{#if user_account}
	<button type="button" class="btn btn-base variant-filled">{user_account}</button>
{:else}
	<button type="button" class="btn btn-base variant-filled" on:click={connect_wallet_handler}
		>Connect MetaMask Wallet</button
	>
{/if}
