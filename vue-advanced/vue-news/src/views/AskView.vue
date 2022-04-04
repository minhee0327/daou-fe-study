<template>
	<div>
		<p v-for="item in fetchAsk" v-bind:key="item.id">
			<router-link v-bind:to="`item/${item.id}`">
				{{ item.title }}
			</router-link>
			<small> {{ item.time_ago }} by {{ item.domain }} </small>
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.mjs';

export default {
	name: 'AskView',
	computed: {
		...mapGetters(['fetchAsk']),
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
	created() {
		this.$store.dispatch('FETCH_ASKS');
	},
};
</script>

<style scoped></style>
