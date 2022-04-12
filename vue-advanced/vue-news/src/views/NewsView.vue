<template>
	<list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem';
export default {
	name: 'NewsView',
	components: {
		ListItem,
	},
	created() {
		this.$store.dispatch('FETCH_NEWS');
	},
};
</script>
