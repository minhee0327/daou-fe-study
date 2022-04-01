<template>
	<!-- url이 만약 news라면 newsComponent-->
	<div id="app">
		<tool-bar></tool-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import ToolBar from '@/components/ToolBar';

export default {
	components: {
		ToolBar,
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}
</style>
