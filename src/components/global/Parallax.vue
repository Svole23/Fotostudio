<template>
  <div
    ref="holder"
    class='parallax-wrapper'
    :class="[className, classObject]">
    <div
      ref="parallax"
      class="parallax"
      :style="styleObject">
      <slot></slot>
    </div>
    <div class="debug">
      <table>
        <tr>
          <td>refElSize</td>
          <td>{{refElSize}}</td>
        </tr>
        <tr>
          <td>bounds</td>
          <td>{{bounds}}</td>
        </tr>
        <tr>
          <td>refBound</td>
          <td>{{refBound}}</td>
        </tr>
        <tr>
          <td>percentage</td>
          <td>{{percentage}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import imagesLoaded from 'imagesloaded'
export default {
  name: 'parallax',
  data: () => ({
    /**
     * $el offsetHeight
     * Height of the element, including vertical measures of padding and borders
     * @type {Number}
     */
    refElSize: 0,
    /**
     * $el BoundingClientRect
     * Size of the element and its position relative to the viewport
     * @type {Object}
     */
    bounds: {},
    refBound: 0,
    percentage: 0
  }),
  props: {
    addition: {
      type: Number,
      default: 0
    },
    speedFactor: {
      type: Number,
      default: 0.3
    },
    wrapped: {
      type: Boolean,
      default: true
    },
    absolute: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number
    },
    className: {
      type: String,
      default: ''
    },
    global: {
      type: Boolean,
      default: true
    }
    // 'topOffset',
    // 'toEnd'
  },
  computed: {
    styleObject () {
      return {
        transform: this.elTransform,
        left: this.elLeft + 'px',
        top: this.elTop + 'px',
        height: this.elHeight + 'px',
        width: this.elWidth + 'px'
      }
    },
    classObject () {
      return {
        'wrapped': this.wrapped,
        'not-wrapped': !this.wrapped,
        'position-absolute': this.absolute
      }
    },
    scrollOffsetProp () {
      return 'scrollTop'
    },
    scrollOffset () {
      return this.$store.getters['app/getState'](this.scrollOffsetProp)
    },
    pageHeight () {
      return this.$store.getters['app/getState']('pageHeight')
    },
    pageWidth () {
      return this.$store.getters['app/getState']('pageWidth')
    },
    refProp () {
      return 'height'
    },
    refSize () {
      return this.$store.getters['app/getState']('height')
    },
    extraOffset () {
      return this.addition ? this.addition : 0
    },
    elTransform () {
      // if (this.isMobile || this.isiPad) return
      // distance from the doc top to the element
      let bound = this.topOffset || this.refBound
      // the point where the el enters the viewport
      let start = bound - this.refSize
      let isClose = bound === 0
      start = this.offset || isClose ? 0 : start
      let end = start + this.refSize
      // end += isClose ? 0 : this.refElSize
      end += this.refElSize
      end += this.wrapped ? 0 : Math.abs(this.move / 2)
      if (this.toEnd) {
        end = this.pageHeight
        end -= this.refSize
      }
      // console.log("SSSS", start, end, this.refSize, this.scrollOffset, this.bounds.height)
      let percentage = this.scrollProgress(start, end, this.scrollOffset)
      this.percentage = percentage
      let currentMove = Math.ceil(this.move * percentage)
      let x = 0
      let y = currentMove
      return `translate3d(${x}px, ${y}px, 0)`
    },
    speedMultiplier () {
      return 1
    },
    move () {
      return this.global ? this.refSize * this.speedFactor * this.speedMultiplier : this.refElSize * this.speedFactor * this.speedMultiplier
    },
    elHeight () {
      // if (this.isMobile || this.isiPad) return
      return this.getSize(this.horizontal)
    },
    elWidth () {
      if (this.isMobile || this.isiPad) return
      return this.getSize(!this.horizontal)
    },
    elTop () {
      // if (this.isMobile || this.isiPad) return
      return this.getOffset(this.horizontal)
    },
    elLeft () {
      // if (this.isMobile || this.isiPad) return
      return this.getOffset(!this.horizontal)
    }
  },
  watch: {
    scrollOffset (top) {
      // console.log("TT", top, this.pageHeight, this.bounds)
    }
  },
  mounted () {
    this.initParallax()
    this.$bus.$on('resize', this.resizeHandler)
    this.$watch(vm => [self.refSize, self.pageHeight, self.pageWidth].join(), val => {
      self.$nextTick(self.resizeHandler)
    })
  },
  methods: {
    loaded () {
      this.resizeHandler()
    },
    getSize (ignore) {
      if (!this.wrapped || ignore) return
      let newh = (this.offset || this.refBound === 0) && !this.toEnd ? this.refElSize : Math.ceil(this.refElSize + Math.abs(this.move))
      return newh || ''
    },
    getOffset (ignore) {
      let m = -this.move
      return ((this.offset || this.refBound === 0) && !this.toEnd) || ignore ? 0 : this.wrapped && m > 0 ? 0 : this.wrapped ? m : Math.round(m / 2)
    },
    initParallax () {
      const self = this
      // if (this.isMobile || this.isiPad) return
      self.resizeHandler()
      imagesLoaded(this.$el, () => {
        console.log('images loaded')
        self.$nextTick(self.resizeHandler)
      })
    },
    // returning the scroll progress from 0 to 1 in between start/end pixels
    scrollProgress (start, end, scrollOffset) {
      scrollOffset = scrollOffset || this.scrollOffset
      let factor = (end - start) / 100
      let scrollStart = (scrollOffset - start) / factor
      let percentage = (scrollOffset >= start && scrollOffset <= end) ? scrollStart / 100 : (scrollOffset > start) ? 1 : 0
      return percentage
    },
    resizeHandler () {
      if (!this.$el) return
      this.refElSize = this.$el.offsetHeight
      this.bounds = this.$el.getBoundingClientRect()
      this.refBound = this.bounds.top + this.scrollOffset
    }
  }
}
</script>
<style lang="scss" scoped="">
@import "@design";
.parallax-wrapper {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  .isMobile {
    &>.parallax {
      height: 100%!important;
      transform: none!important;
      top: 0!important;
    }
  }
  @include media-breakpoint-down(sm) {
    &.not-wrapped {
      &>.parallax {
        transform: none!important;
        top: 0!important;
      }
    }
  }
}
.hidden {
  visibility: hidden;
}
.wrapped {
  overflow: hidden;
  .parallax {
    // transition: transform 1.2s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  }
}
.parallax {
  position: relative;
  will-change: transform;
  height: 123.666%;
  // top: -23.666%;
  backface-visibility: hidden; // transition: transform .3s ease-out;
  /*background: red;*/
  // transition: transform 2.4s cubic-bezier(0.15, 0.9, 0.34, 0.95);
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.debug {
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(white, 0.7)
}
</style>