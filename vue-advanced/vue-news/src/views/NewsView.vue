<template>
	<div>
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus';
import ListMixin from '@/mixins/ListMixin';

export default {
	name: 'NewsView',
	components: {
		ListItem,
	},
	mixins: [ListMixin],
	// created() {
	// 	bus.$emit('start:spinner');
	// 	this.$store
	// 		.dispatch('FETCH_NEWS')
	// 		.then(() => {
	// 			console.log('fetched');
	// 			bus.$emit('end:spinner');
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// },
};
</script>
