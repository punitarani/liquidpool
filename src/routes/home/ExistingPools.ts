import { ethers } from 'ethers';

import poolContract from './poolcontract.json';

// Return list of existing pools
export default async function get_existing_pools() {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore - window.ethereum is injected by Metamask
	const provider = new ethers.BrowserProvider(window.ethereum);

	// Get pool factory contract instance
	const nftPoolFactory = new ethers.Contract(
		poolContract.factoryContract.address,
		poolContract.factoryContract.abi,
		provider
	);

	// Get pool length
	let pool_length = 0;
	try {
		pool_length = await nftPoolFactory.allPoolsLength();
	} catch (error) {
		console.log(error);
		return [];
	}

	const pools_data = [];
	for (let pool = 0; pool < pool_length; pool++) {
		pools_data.push({
			reference: `${pool}`,
			contractAddress: poolContract.factoryContract.address,
			abi: poolContract.factoryContract.abi,
			calls: [{ reference: `pool${pool}`, methodName: 'allPools', methodParameters: [pool] }]
		});
	}

	return pools_data;
}
