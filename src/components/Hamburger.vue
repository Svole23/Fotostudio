<template>
  <div class="hamburger">
    <div class="hamburger-line__one" ></div>
    <div class="hamburger-line__two" ></div>
    <div class="hamburger-line__three"></div>
  </div>
</template>

<script>
  export default {
    name: 'hamburger',
    data () {
      return {
        timelineReady: false
      }
    },
    computed: {
      menu () {
        return this.$store.state.isMenuOpen
      }
    },
    
    mounted () {
      this.initTimeline()
    },
    
    methods: {
      initTimeline () {
        this.$timeline = new TimelineMax({
          paused: true
        })

        let el1 = this.$el.querySelectorAll('.hamburger-line__one')
        let el2 = this.$el.querySelectorAll('.hamburger-line__two')
        let el3 = this.$el.querySelectorAll('.hamburger-line__three')

        this.$timeline
        .to(el2, 0.2, {         
          opacity: 0,
          rotation: -40,
          ease: Power2.easeInOut
        })

        .to(el1, 0.2, {         
          x: 17,
          y: 13.5,
          rotation: -45,
          ease: Power2.easeInOut
        })
        
        .to(el3, 0.2, {         
          x: -13.5,
          y: -9,
          rotation: 45,
          ease: Power2.easeInOut
        })
        this.timelineReady = true;
      }
    },
    watch: {
      menu (newvalue,oldvalue) {
        if(newvalue === true) {
          this.$timeline.play()
        }
        if(newvalue === false) {
          this.$timeline.reverse()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 25px;
  background: black;
  position: relative;

  .hamburger-line__one {
    height: 2px;
    width: 50%;
    background: white;
    top: 0;
    left: 0;
    position: absolute;
  }
  .hamburger-line__two {
    height: 2px;
    width: 100%;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
  }
  .hamburger-line__three {
    height: 2px;
    width: 50%;
    background: white;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
