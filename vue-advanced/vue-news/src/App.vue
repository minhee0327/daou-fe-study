<template>
	<!-- url이 만약 news라면 newsComponent-->
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
		<spinner :loading="loadingStatus"></spinner>
	</div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
import Spinner from '@/components/Spinner';
import bus from '@/utils/bus';

export default {
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}

/* router transition */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
	opacity: 0;
}
a {
	color: #344952;
	text-decoration: none;
}
a:hover {
	color: #42b883;
	text-decoration: underline;
}
a.router-link-exact-active {
	text-decoration: underline;
}
</style>
