<template>
	<div class="logo">
		<svg version="1.1" 
			xmlns="http://www.w3.org/2000/svg" 
			x="0px" 
			y="0px" 
			viewBox="0 0 240 120" 
			preserveAspectRatio="xMidYMid meet" >
			<path fill="white" d="M13.8,62.5c2.8-0.8,4.8-2.8,4.8-6.2v-0.1c0-1.8-0.6-3.3-1.7-4.4c-1.3-1.3-3.3-2-5.9-2H2v20.3 h3.6v-7.1v-3.2v-6.8h5.2c2.6,0,4.2,1.2,4.2,3.4v0.1c0,2.1-1.6,3.4-4.2,3.4H8.2l7.2,10.3h3.9L13.8,62.5z"></path>
			<polygon fill="white" points="33.5,49.7 30.2,49.7 21.3,70.2 24.9,70.2 31.8,54.3 38.7,70.2 42.5,70.2"></polygon>
			<path fill="white" d="M45.9,49.8h7.6c6.4,0,10.8,4.4,10.8,10.1V60c0,5.7-4.4,10.2-10.8,10.2h-7.6V49.8z M53.5,66.9
			c4.3,0,7.1-2.9,7.1-6.9V60c0-4-2.8-6.9-7.1-6.9h-4v13.8H53.5z"></path>
			<path fill="white" d="M68.9,49.8h3.6v20.3h-3.6V49.8z"></path>
			<polygon fill="white" points="88.4,49.7 85.1,49.7 76.1,70.2 79.8,70.2 86.7,54.3 93.5,70.2 97.3,70.2"></polygon>
			<path fill="white" d="M100.8,49.8h3.3L115,63.9V49.8h3.5v20.3h-3l-11.2-14.5v14.5h-3.5V49.8z"></path>
			<path fill="white" d="M122.8,60.1L122.8,60.1c0-5.8,4.3-10.6,10.5-10.6c3.7,0,6,1.3,8,3.2l-2.3,2.6
			c-1.6-1.5-3.4-2.5-5.7-2.5c-3.9,0-6.7,3.2-6.7,7.2V60c0,4,2.8,7.2,6.7,7.2c2.5,0,4.1-1,5.8-2.6l2.3,2.3c-2.1,2.2-4.4,3.6-8.2,3.6
			C127.3,70.5,122.8,65.9,122.8,60.1z"></path>
			<path fill="white" d="M145.2,49.8h15.1V53h-11.5v5.3h10.2v3.2h-10.2V67h11.6v3.2h-15.2V49.8z"></path>
		</svg>
	</div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style lang="scss" scoped>
@import '@design';

.logo {
	width: 310px;
	background:black;
	height:100%;

	@include media-breakpoint-up(sm) {
		width: 280px;
		height:100%;
	}

	@include media-breakpoint-up(md) {
		height: 100px;
		width: 280px;
	}

	@include media-breakpoint-up(lg) {
		height: 100%;
		width: 280px;
	}

}
svg {
	margin-left: 100px;
	margin-bottom: 20px;
	padding: 0;
	height:100%;

	@include media-breakpoint-up(sm) {
		margin-left: 65px;
		height: 100%;
		width: auto;
	}

	@include media-breakpoint-up(md) {
		margin-left: 65px;
		height: 100%;
		width: auto;
	}

	@include media-breakpoint-up(lg) {
		margin-left: 90px;
		height: 100%;
		width: auto;
	}

}

</style>
