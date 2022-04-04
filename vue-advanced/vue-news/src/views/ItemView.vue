<template>
	<div>
		<!--		{{this.$store.state.item }}-->
		<p>
			{{ this.$store.state.item.title }}
		</p>
		<p>
			{{ this.$store.state.item.content }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'ItemView',
	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', itemId);
	},
};
</script>

<style></style>
