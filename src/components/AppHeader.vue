<template>
  <div class="app-header__wrapper">
    <div class="app-header">
      <div class="app-header__container">
        <div class="logo-wrapper">
          <router-link to="/" class="logo-link">
            <div class="logo__container">
              <img class="logo" src="@/assets/img/fotostudio_logo.png">
            </div>
          </router-link>
        </div>
        <div class="fill">
          <h1 class="fill-title">Foto Studio Express</h1>
        </div>
        <div class="locale-changer">
          <select class="locale-select" v-model="$i18n.locale">
            <option class="locale-option" v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </div>
        <div class="hamburger-container" v-on:click="open">
          <hamburger />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import Hamburger from '@/components/Hamburger'
  import MainMenu from '@/components/MainMenu'
  import {TimelineMax} from 'gsap'
  export default {
    name: 'app-header',
    data () {
      return {
        menuOpen: false,
        langs: ['srpski', 'english']
      }
    },
    components: {
      Logo,
      Hamburger,
      MainMenu
    },
    methods: {
      open () {
        this.menuOpen = !this.menuOpen
      },
      setActiveLocation (input) {
        // console.log('method for commit',input)
        this.$store.commit('setMenuOpen', input)
      }
    },
    watch: {
      menuOpen (newvalue,oldvalue) {
        this.$store.commit('setMenuOpen',newvalue)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@design";
.app-header {
  position:absolute;
  top:0;
  left:0;
  background: transparent;
  width: 100%;
  height: 60px;

  @include media-breakpoint-up(sm) {
    height: 120px;
  }

  @include media-breakpoint-up(md) {
    padding-left: $width-unit;
  }

  @include media-breakpoint-up(lg) {
    height: $width-unit * 2;
  }

  @include media-breakpoint-up(xl) {
    width: 100%;
    height: $width-unit;
    padding-right: 0;
    padding-left: 0;
  }

  .app-header__container {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .locale-changer {
      position: absolute;
      display: none;

      @include media-breakpoint-up(md) {
        right: $width-unit * 2;
        top: auto;
        display: block;
      }

      .locale-select {
        cursor: pointer;
        padding: 0.5rem 1rem;
        outline: none;
        border: none;
      }
    }

    .logo-wrapper {
      position:relative;
      height: 100%;
      width: $width-unit * 3;
      background: white;
      padding: 0;
      z-index: 800;
      display: none;

      @include media-breakpoint-up(md) {
        width: $width-unit * 2;
      }

      @include media-breakpoint-up(lg) {
        display: block;
        width: $width-unit * 5;
      }

      @include media-breakpoint-up(xl) {
        width: $width-unit * 2; 
        padding: 0;
      }

      .logo-link {
        display: block;
        width: 100%;
        height: 100%;
        position:relative;
        z-index: 30;
      }
    }

    .hamburger-container {
      position:relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: $width-unit * 3;
      background: black;
      z-index: 999;
      cursor: pointer;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 2;
      }

      @include media-breakpoint-up(lg) {
        width:  $width-unit * 2;
      }

      @include media-breakpoint-up(xl) {
        width: $width-unit;
      }
    }
  }
}

.logo__container {
  width: 100%;
  height: 100%;

  .logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.fill {
  height: auto;
  width: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: $width-unit;

  @include media-breakpoint-up(md) {
    padding-left: 0;
  }

  @include media-breakpoint-up(lg) {
    display: none;
  }

  @include media-breakpoint-up(xl) {
    display: block;
  }

  .fill-title {
    opacity: 0.2;
    color: black;
    font-family: 'Merriweather', serif;
    font-size: 21px;

    @include media-breakpoint-up(md) {
      font-size: 2.5rem;
    }
  }
}
</style>
