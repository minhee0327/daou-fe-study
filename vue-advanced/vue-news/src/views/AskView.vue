<template>
	<div>
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '@/components/ListItem';

export default {
	name: 'AskView',
	components: { ListItem },
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
	// 	this.$store.dispatch('FETCH_ASKS');
	// },
};
</script>
