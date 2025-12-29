<script lang="ts">
	let iframesLoaded = $state([false, false]);

	function handleIframeLoad(index: number) {
		iframesLoaded[index] = true;
	}
</script>

<div class="sound-page">
	<div class="embed-container">
		{#if !iframesLoaded[0]}
			<div class="loading-overlay">
				<div class="spinner"></div>
			</div>
		{/if}
		<iframe
			class="embed-frame"
			title="Dindles - Sugarcane"
			src="https://bandcamp.com/EmbeddedPlayer/album=243964234/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
			seamless
			onload={() => handleIframeLoad(0)}
		>
			<a href="https://dindles.bandcamp.com/album/sugarcane">Sugarcane by Dindles</a>
		</iframe>
	</div>

	<div class="embed-container">
		{#if !iframesLoaded[1]}
			<div class="loading-overlay">
				<div class="spinner"></div>
			</div>
		{/if}
		<iframe
			class="embed-frame"
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
	.sound-page {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
	}

	.embed-container {
		display: flex;
		justify-content: center;
		position: relative;
		min-height: 400px;
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--colour-surface);
		border-radius: 0.5rem;
		z-index: 10;
	}

	.embed-frame {
		width: 100%;
		max-width: 32rem;
		aspect-ratio: 1 / 1;
		border-radius: 0.5rem;
	}

	.spinner {
		width: 3rem;
		height: 3rem;
		border: 4px solid var(--colour-surface);
		border-top-color: var(--colour-text);
		border-radius: 9999px;
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
