<template>
	<div>
		<section>
			<user-profile :info="fetchedItem">
				<router-link slot="username" :to="`/user/${fetchedItem.user}`">
					{{ fetchedItem.user }}
				</router-link>
				<template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
			</user-profile>
			<!--    사용자 상세 정보 -->
			<!--			<div class="user-container">-->
			<!--				<div class="user-container"><i class="fas fa-user"></i></div>-->
			<!--				<div class="user-description">-->
			<!--					<router-link :to="`/user/${fetchedItem.user}`">-->
			<!--						{{ fetchedItem.user }}-->
			<!--					</router-link>-->
			<!--					<div class="time">-->
			<!--						{{ fetchedItem.time_ago }}-->
			<!--					</div>-->
			<!--				</div>-->
			<!--			</div>-->
		</section>
		<section>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		<section>
			<!--      질문 댓글-->
			<div v-html="fetchedItem.content"></div>
		</section>
	</div>
</template>

<script>
import UserProfile from '@/components/UserProfile';
import { mapGetters } from 'vuex';

export default {
	name: 'ItemView',
	computed: {
		...mapGetters(['fetchedItem']),
	},
	components: {
		UserProfile,
	},
	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', itemId);
	},
};
</script>

<style scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
}
.fa-user {
	font-size: 2.5rem;
}
.user-description {
	padding-left: 8px;
}
.time {
	font-size: 0.7rem;
}
</style>
