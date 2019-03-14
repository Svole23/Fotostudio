<template>
  <div
  ref="item"
  class="main-menu-item" :class="direction">
  <div
  ref="itemInner"
  class="main-menu-item__inner" :class="direction2">
  <slot/> 
</div>
</div>
</template>

<script>
  import {TimelineMax} from 'gsap'
  export default {
    name: "main-menu-item",
    props: {
      direction: {
      // available options: tb, bt, lr, rl
      type: String,
      default: 'tb'
    }
  },
  data: () => ({
    timelineReady: false
  }),
  mounted () {
    this.initTimeline()
  },
  computed: {
    direction2 () {
      if(this.direction === 'tb') {
        return 'bt'
      }
      if(this.direction === 'bt') {
        return 'tb'
      }
      if(this.direction === 'lr') {
        return 'rl'
      }
      if(this.direction === 'rl') {
        return 'lr'
      }
    }
  },
  methods: {
    initTimeline () {
      // init timeline
      this.$timeline = new TimelineMax({
        paused: true,
        onStart: () => {},
        onComplete: () => {}
      })
      this.$timeline
      .to(this.$refs.item, 0.5, {
        x:0,
        y:0,
      })
      .to(this.$refs.itemInner, 0.5, {
        x:0,
        y:0,
      },'-=0.5')
    },
    animateIn () {
      this.$timeline.play()
    },
    animateOut () {
      this.$timeline.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.main-menu-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .main-menu-item__inner {
    position:relative;
    overflow: hidden;
    width: 100%;
    height: 100%;    
  }
}

.tb {
  transform: translate(0,- 200vh);
  @include media-breakpoint-up(sm) {
    transform: translate(0,- 200vh);
  }
  @include media-breakpoint-up(md) {
    transform: translate(0,- 200vh);
  }
  @include media-breakpoint-up(lg) {
    transform: translate(0,- 200vh);
  }
}

.bt {
  transform: translate(0, 200vh);
  @include media-breakpoint-up(sm) {
    transform: translate(0, 200vh);
  }
  @include media-breakpoint-up(md) {
    transform: translate(0, 200vh);
  }
  @include media-breakpoint-up(lg) {
    transform: translate(0, 200vh);
  }
}

.lr {
  transform: translate(- 200vw, 0);

  @include media-breakpoint-up(sm) {
    transform: translate(- 200vw, 0);
  }

  @include media-breakpoint-up(md) {
   transform: translate(- 200vw, 0);
  }

  @include media-breakpoint-up(lg) {
    transform: translate(- 200vw, 0);
  }
}

.rl {
  transform: translate(200vw, 0);

  @include media-breakpoint-up(sm) {
   transform: translate(200vw, 0);
 }

 @include media-breakpoint-up(md) {
   transform: translate(200vw, 0);
 }

 @include media-breakpoint-up(lg) {
   transform: translate(200vw, 0);
 }
}
</style>
