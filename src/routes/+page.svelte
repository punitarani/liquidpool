<script>
	import ConnectWalletButton from './home/ConnectWalletButton.svelte';

	// Ethereum address
	let user_account = null;
</script>

<div class="w-full flex align-middle justify-center">
	<div class="w-1/2 flex flex-row justify-between">
		<h1>LiquidPool</h1>
		<ConnectWalletButton bind:user_account />
	</div>
</div>
