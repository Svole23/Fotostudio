<template>
	<div class="toc-item" v-view.once="onInView">
		<span ref="overline" class="overline">{{item.fields.header}}</span>
		<h2 ref="title" class="title">{{item.fields.title}}</h2>
		<div class="image-container">
			<block-reveal
				ref="blockreveal"
				:direction="blockRevealDirection"
				:speed="1"
				:delay="0.5"
				color="white"
				@on-start="onBlockRevealStarted">
				<div class="text">
					<div class="category-item" v-for="(category,index) in item.fields.categories">
						<p class="category-title">{{category.title}}</p>
						<span class="category-text">{{category.text}}</span>
					</div>
				</div>
			</block-reveal>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {TimelineMax} from 'gsap'

	export default {
		name: 'toc-item',
		data () {
    	return {
    	  timelineReady: false,
    	}
  	},
		props: {
			item: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				required: true
			}
		},
		mounted () {
    	this.initTimeline()
  	},
		computed: {
			imageSrc() {
				return require('@/assets/img/' + this.item.fields.toc_image)
			},
    	blockRevealDirection () {
      	return 'lr'
    	},
    	imageColor () {
    		return 'white'
    	},
			delay () {
				return 0.3 * this.index
			}
    },
    methods: {
    	initTimeline () {
				const self = this

	      this.$timeline = new TimelineMax({
	        paused: true,
	        delay: 0.7 * this.index
	      })

				let els = [
					this.$refs.overline,
					this.$refs.title
				]

  	    this.$timeline
					.staggerFrom(els, 1.2, {
						x: -30,
	          opacity: 0,
						autoAlpha: 0,
	          ease: 'Expo.easeOut',
					}, 0.2)

   	 		this.timelineReady = true;
   		},
			onBlockRevealStarted () {
				this.$timeline.play()
			},
			onInView() {
    	  if (!this.timelineReady) return
				this.$refs.blockreveal.start()
    	}
  	}
	}
</script>

<style lang="scss" scoped>
@import "@design";

.toc-item {
	position:relative;
	display: flex;
	flex-direction: column;

	@include media-breakpoint-up(lg) {
		margin-right: 0;
	}
	.overline {
		display: block;
		margin-bottom: 10px;

		@include media-breakpoint-up(md) {
			margin-bottom: 1rem;
			margin-top: 2rem
		}

		@include media-breakpoint-up(lg) {
			margin-top: 0;
			font-size: 12px;
		}
	}

	.title {
		margin-bottom: 1rem;
		font-size: 20px;
    font-weight: 700;

    @include media-breakpoint-up(md) {
    	font-size: 26px;

    }
	}

	.image-container {
		width: 100%;
		margin-top: auto;
		height: $width-unit * 4;
	}

	.text {
		width: 100%;
		margin-top: auto;
		height: $width-unit * 4;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
}


.category-item {
	padding-bottom: 1rem;
	.category-title {
		margin: 0;
	}

	.category-text {
		font-size: 12px;
	}
}

</style>
