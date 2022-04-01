<template>
	<div>
		<div v-for="user in users" v-bind:key="user.id">
			{{ user.title }}
		</div>
	</div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
	name: 'NewsView',
	data() {
		return {
			users: [],
		};
	},
	created() {
		// const vm = this;
		console.log(this);
		fetchNewsList()
			.then(function (response) {
				// vm.users = response.data;
				console.log(this);
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};
</script>

<style></style>
