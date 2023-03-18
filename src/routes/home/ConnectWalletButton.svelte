<script>
	let user_account = null;

	// Connect MetaMask Wallet
	async function connect_wallet_handler() {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			if (accounts.length > 0) {
				user_account = accounts[0];
			} else {
				alert('No Ethereum accounts found');
			}
		} else {
			alert('Please install MetaMask');
		}
	}

	// Hide address by printing first 6 and last 4 characters
	function hide_address(address) {
		return address.slice(0, 6) + '...' + address.slice(-4);
	}
</script>

{#if user_account}
	<button type="button" class="btn btn-base variant-filled">{hide_address(user_account)}</button>
{:else}
	<button type="button" class="btn btn-base variant-filled" on:click={connect_wallet_handler}
		>Connect MetaMask Wallet</button
	>
{/if}
