<script>
	import ConnectWalletButton from './home/ConnectWalletButton.svelte';
	// Your custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css';
</script>

<div class="w-full flex align-middle justify-center">
	<div class="w-1/2 flex flex-row justify-between">
		<h1>LiquidPool</h1>
		<ConnectWalletButton />
	</div>
</div>
