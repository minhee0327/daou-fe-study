<template>
	<div>
		<ul class="news-list">
			<li v-for="item in fetchAsk" v-bind:key="item.id" class="post">
				<!--   포인트 영역     -->
				<div class="points">
					{{ item.points }}
				</div>
				<!-- 기타 정보 입력-->
				<div>
					<p class="news-title">
						<router-link v-bind:to="`item/${item.id}`">
							{{ item.title }}
						</router-link>
					</p>
					<small class="link-text">
						{{ item.time_ago }} by
						<router-link class="link-text" v-bind:to="`/user/${item.user}`">
							{{ item.user }}
						</router-link>
					</small>
				</div>
			</li>
		</ul>

		<!--		<p v-for="item in fetchAsk" v-bind:key="item.id">-->
		<!--			<router-link v-bind:to="`item/${item.id}`">-->
		<!--				{{ item.title }}-->
		<!--			</router-link>-->
		<!--			<small> {{ item.time_ago }} by {{ item.domain }} </small>-->
		<!--		</p>-->
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

<style scoped>
.news-list {
	margin: 0;
	padding: 0;
}
.post {
	list-style: none;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #42b883;
}
.news-title {
	margin: 0;
}
.link-text {
	color: #828282;
}
</style>
