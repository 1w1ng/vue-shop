<template>
	<div @click="scrollToTop" class="toTopIconWrapper">
		<svg class="icon toTopIcon" viewBox="0 0 88 88">
			<g fill="none" fill-rule="evenodd">
				<circle cx="44" cy="44" fill="#FFF" r="43.5" stroke="#CCC" />
				<rect fill="#AFAFAF" height="3" rx="1.5" width="28" x="30" y="27" />
				<path
					d="M42.5 38.056V63.75c0 .83.666 1.501 1.5 1.501.828 0 1.5-.668 1.5-1.5V37.428l6.942 6.942a1.499 1.499 0 1 0 2.121-2.122l-9.185-9.185-.002-.001-.002-.002a1.495 1.495 0 0 0-2.121 0l-.002.002-.002.001-9.185 9.185a1.499 1.499 0 1 0 2.122 2.122l6.314-6.315z"
					fill="#AFAFAF"
				/>
			</g>
		</svg>
	</div>
</template>

<script>
	export default {
		name: 'MarkPage',
		props: {
			scrollToTop: Function
		}
	};
</script>

<style scoped>
	.toTopIconWrapper {
		position: fixed;
		bottom: 5rem;
		right: 1rem;
	}

	.toTopIcon {
		width: 2.5rem;
		height: 2.5rem;
	}
</style>
