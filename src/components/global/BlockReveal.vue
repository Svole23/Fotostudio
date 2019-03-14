<template>
	<div class="block-reveal">
		<div ref="cover" class="block-reveal__cover" :style="{ background: color }" />
		<div ref="content" class="block-reveal__content">
			<slot/>
		</div>
	</div>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
	name: 'block-reveal',
	data () {
  	return {
  		isAnimating: false,
  	  timelineReady: false
  	}
  },
  computed : {
  	// direction () {
  	// 	return this.direction
  	// }
  	transformOrigin () {
  		let origin
  		switch (this.direction) {
  			case 'lr':
  				origin = '0 50%'
  				break
  			case 'rl':
  				origin = '100% 50%'
  				break
  			case 'tb':
  				origin = '50% 0'
  				break
  			case 'bt':
  				origin = '50% 100%'
  				break
  		}
  		return origin
  	},
  	transformOrigin2 () {
  		let origin
  		switch (this.direction) {
  			case 'lr':
  				origin = '100% 50%'
  				break
  			case 'rl':
  				origin = '0 50%'
  				break
  			case 'tb':
  				origin = '50% 100%'
  				break
  			case 'bt':
  				origin = '50% 0'
  				break
  		}
  		return origin
  	}
  },
	props: {
		color: {
			type: String,
			default: 'white'
		},
		speed: {
			type: Number,
			default: 0.5
		},
		delay: {
			type: Number,
			default: 0
		},
		direction: {
			type: String,
			default: 'rl',
			validator: function (value) {
        return ['lr', 'rl', 'tb', 'bt'].indexOf(value) !== -1
      }
		}
	},
	mounted () {
    this.initTimeline()
  },
  methods: {
    initTimeline () {
    	const self = this

      self.$timeline = new TimelineMax({
        paused: true,
				delay: self.delay,
				onStart: () => {
					self.$emit("on-start")
				}
      })

			// starting transform origin
			self.$refs.cover.style.WebkitTransformOrigin = self.transformOrigin
      self.$refs.cover.style.transformOrigin = self.transformOrigin

      // let content = self.$refs.content

			// In Animation setting
      let animationInObject = {
        ease: "Expo.easeIn",
      	onComplete: function () {
      		self.$refs.content.style.visibility = 'visible'
					// update transform origin
      		self.$refs.cover.style.WebkitTransformOrigin = self.transformOrigin2
      		self.$refs.cover.style.transformOrigin = self.transformOrigin2
      		self.$emit("on-cover")
      	}
      }
      if (self.direction === 'lr' || self.direction === 'rl') {
      	animationInObject.scaleX = 1
      } else {
      	animationInObject.scaleY = 1
      }

			// Out Animation setting
      let animationOutObject = {
				ease: "Expo.easeOut",
      	onComplete: function () {
      		self.isAnimating = false
      		self.$emit("on-complete")
      	}
      }
      if (self.direction === 'lr' || self.direction === 'rl') {
      	animationOutObject.scaleX = 0
      } else {
      	animationOutObject.scaleY = 0
      }

			// timeline
      self.$timeline
        .to(self.$refs.cover, self.speed, animationInObject)
        .to(this.$refs.cover, self.speed, animationOutObject)

      this.timelineReady = true;
    },
    start () {
      if (!this.timelineReady) return
      if (this.isAnimating) return
      this.isAnimating = true
    	this.$emit("on-start")
      this.$timeline.play()
    }
  }
}
</script>

<style lang="scss" scoped>

.block-reveal {
	display: block;
	position: relative;

}

.block-reveal__cover {
	position: absolute;
	height: 101%;
	width: 101%;
	background: #ccc;
	transform-origin: 0 50%;
	transform: scaleX(0);
	z-index: 2;
}

.block-reveal__content {
	visibility: hidden;
	width: 100%;
	height: 100%;
}
</style>
