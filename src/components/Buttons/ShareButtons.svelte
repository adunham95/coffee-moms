<script lang="ts">
	export let shareData: {
		title: string;
		text: string;
		url?: string;
	};
	if (!navigator.canShare) {
		console.log('Share not supported');
	} else if (navigator.canShare(shareData)) {
		console.log('Share with the data supported');
	} else {
		console.log('Specified data cannot be shared.');
	}
</script>
