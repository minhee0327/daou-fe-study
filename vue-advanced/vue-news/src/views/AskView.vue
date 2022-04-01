<template>
	<div>
		<div v-for="item in ask" v-bind:key="item.id">{{ item.title }}</div>
	</div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
	name: 'AskView',
	data() {
		return {
			ask: [],
		};
	},
	created() {
		fetchAskList()
			.then(response => (this.ask = response.data))
			.catch(error => console.log(error));
	},
};
</script>

<style scoped></style>
