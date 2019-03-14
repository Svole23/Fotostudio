<template>
  <section class="main">
    <app-header/>
    <main-menu/>
    <router-view/>
    <app-footer/>
  </section>
</template>

<script>
import Page from './components/Page.vue'
import AppHeader from './components/AppHeader.vue'
import HomePage from './components/HomePage.vue'
import AppFooter from './components/AppFooter.vue'
import {TweenMax} from 'gsap'
import MainMenu from '@/components/MainMenu'

export default {
  name: 'app',
  components: {
    AppHeader,
    HomePage,
    AppFooter,
    Page,
    MainMenu
  },
  mounted () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, true)
    window.addEventListener('scroll', this.scrollHandler, true)
  },
  computed: {
    isMenuOpen () {
      console.log('coming from layout',this.$store.state.isMenuOpen)
      return this.$store.state.isMenuOpen
    },
  },
  watch: {
    isMenuOpen (newvalue,oldvalue) {
      if(newvalue === true) {
        TweenMax.set("body", { overflowY: 'hidden' })
      }
      if(newvalue === false) {
        TweenMax.set("body", { overflowY: 'scroll' })
      }
    }
  },
  methods: {
    resizeHandler () {
      const self = this

      self.$store.dispatch('app/SET_STATE', {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      })

      self.$nextTick(() => {
        self.$bus.$emit('resize')
      })
    },
    scrollHandler () {
      let doc = document.documentElement
      let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

      this.$store.dispatch('app/SET_STATE', {
        scrollTop: top,
        scrollLeft: left
      })
    },

  }
}
</script>

<style lang="scss">
@import "@design";
@import "~bootstrap/scss/bootstrap";

body {
  margin: 0px;
  font-family: 'Merriweather', serif;
  overflow-x: hidden;
}

.main {
  width: 100%;
  overflow-x: hidden;
}

</style>
