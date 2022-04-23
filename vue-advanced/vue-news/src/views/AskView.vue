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
	name: 'AskView',
	components: { ListItem },
	mixins: [ListMixin],
	computed: {
		// #3
		// ...mapGetters(['fetchAsk']),
		// #2
		// ...mapState({
		// 	ask: state => state.ask,
		// }),
		//
		// #1
		// ask(){
		//   return this.$store.state.ask;
		// }
	},
	// created() {
	// 	bus.$emit('start:spinner');
	// 	setTimeout(() => {
	// 		this.$store
	// 			.dispatch('FETCH_ASKS')
	// 			.then(() => {
	// 				console.log('fetched');
	// 				bus.$emit('end:spinner');
	// 			})
	// 			.catch(error => {
	// 				console.log(error);
	// 			});
	// 	}, 3000);
	// },
};
</script>
