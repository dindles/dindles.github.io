<script lang="ts">
	let iframesLoaded = $state([false, false]);

	function handleIframeLoad(index: number) {
		iframesLoaded[index] = true;
	}
</script>

<div class="flex flex-col gap-8 p-4">
	<div class="flex justify-center relative min-h-[400px]">
		{#if !iframesLoaded[0]}
			<div class="absolute inset-0 flex items-center justify-center bg-surface rounded-lg z-10">
				<div class="spinner"></div>
			</div>
		{/if}
		<iframe
			class="w-full max-w-lg aspect-square rounded-lg"
			title="Dindles - Sugarcane"
			src="https://bandcamp.com/EmbeddedPlayer/album=243964234/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
			seamless
			onload={() => handleIframeLoad(0)}
		>
			<a href="https://dindles.bandcamp.com/album/sugarcane">Sugarcane by Dindles</a>
		</iframe>
	</div>

	<div class="flex justify-center relative min-h-[400px]">
		{#if !iframesLoaded[1]}
			<div class="absolute inset-0 flex items-center justify-center bg-surface rounded-lg z-10">
				<div class="spinner"></div>
			</div>
		{/if}
		<iframe
			class="w-full max-w-lg aspect-square rounded-lg"
			title="Dindles - A Neglected Corner of an Orbital Farm"
			src="https://bandcamp.com/EmbeddedPlayer/album=2843291190/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
			seamless
			onload={() => handleIframeLoad(1)}
		>
			<a href="https://dindles.bandcamp.com/album/a-neglected-corner-of-an-orbital-farm">
				A Neglected Corner of an Orbital Farm by Dindles
			</a>
		</iframe>
	</div>
</div>

<style>
	.min-h-\[400px\] {
		min-height: 400px;
	}

	.spinner {
		width: 3rem;
		height: 3rem;
		border: 4px solid var(--color-gray-300);
		border-top-color: var(--color-gray-600);
		border-radius: var(--radius-full);
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spinner {
			animation: none;
		}
	}
</style>
