<script>
	import ConnectWalletButton from './home/ConnectWalletButton.svelte';
	import PoolsList from './home/PoolsList.svelte';

	// Ethereum address
	let user_account = null;
</script>

<div class="flex flex-col items-center m-6">
	<div class="w-3/4 flex flex-col items-center">
		<div class="w-1/2 flex flex-row justify-between m-6">
			<h1>LiquidPool</h1>
			<ConnectWalletButton bind:user_account />
		</div>
		<PoolsList ready={user_account != null} />
	</div>
</div>
