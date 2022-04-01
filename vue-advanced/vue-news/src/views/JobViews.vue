<template>
	<div>
		<div v-for="job in jobs" v-bind:key="job.id">
			{{ job.title }}
		</div>
	</div>
</template>

<script>
import { fetchJobsList } from '@/api';

export default {
	name: 'JobViews',
	data() {
		return {
			jobs: [],
		};
	},
	created() {
		fetchJobsList()
			.then(response => (this.jobs = response.data))
			.then(error => console.log(error));
	},
};
</script>

<style scoped></style>
