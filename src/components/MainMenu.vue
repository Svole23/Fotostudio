<template>
  <div class="main-menu" v-view="startAnim" :class="{ clickable: isMenuOpen }">
    <main-menu-item
    ref="menuItem1"
    direction="bt"
    class="corner-container">
    <div class="corner">
      <img class="corner-image" src="@/assets/img/home-hero-bg-02.jpg">
    </div>
  </main-menu-item>
  <main-menu-item
  ref="menuItem2"
  direction="lr"
  class="adress-container">
  <div class="adress">
    <p class="adress-location">Foto Studio Express</p>
    <p class="adress-text">Pilota M. Petrovića 65, Beograd</p>
    <div class="adress-contact">
      <p class="adress-phone">011 2321 338 / 063 340 100</p>
      <p class="adress-email">fotoexpressbg@gmail.com</p>
    </div>
  </div>
</main-menu-item>
<main-menu-item
ref="menuItem3"
direction="rl"
class="pattern-container">
<div class="pattern">
</div>
</main-menu-item>
<main-menu-item
ref="menuItem4"
direction="rl"
class="brochure-container">
<div class="brochure">
    <p class="brochure-location">Foto / Video dogadjaji</p>
    <div class="brochure-contact">
      <p class="brochure-phone">066 922 3663</p>
      <p class="brochure-email">info@fotostudio.co.rs</p>
    </div>
  </div>
</main-menu-item>
<main-menu-item
ref="menuItem5"
direction="tb"
class="contact-container">
<router-link to="/" class="contact">
  <div class="menu-item-map">
    <img class="main-menu-image" src="@/assets/img/main-menu__image.jpg">
  </div>
</router-link>
</main-menu-item>
<main-menu-item
ref="menuItem6"
direction="bt"
class="main-container">
<div class="main">
  <div class="locale-changer">
          <select class="locale-select" v-model="$i18n.locale">
            <option class="locale-option" v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </div>
  <router-link to="/" class="main-link">
    <span class="main-item h2">{{ $t("menu.home") }}</span>
  </router-link>
  <router-link to="/venčanja" class="main-link">
    <span class="main-item h2">{{ $t("menu.wedding") }}</span>
  </router-link>
  <router-link to="/rodjendani" class="main-link">
    <span class="main-item h2">{{ $t("menu.birthday") }}</span>
  </router-link>
  <router-link to="/krštenja" class="main-link">
    <span class="main-item h2">{{ $t("menu.baptism") }}</span>
  </router-link>
  <router-link to="/fotograf" class="main-link">
    <span class="main-item h2">{{ $t("menu.photograph") }}</span>
  </router-link>
</div>
</main-menu-item>
</div>
</template>

<script>
  import MainMenuItem from '@/components/MainMenuItem'
  import {TimelineMax} from 'gsap'
  export default {
   name: 'main-menu',
   components: {
    MainMenuItem
  },
  data: () => ({
    timelineReady: false,
    langs: ['srpski', 'english']
  }),
  computed: {
    startAnim () {
      if (this.$store.state.isMenuOpen) {
        console.log(this.$store.state.isMenuOpen)
        return this.start()
      } else if (this.timelineReady && !this.$store.state.isMenuOpen) {
        return this.reverse()
      }
    },
    brochure () {
      return this.$store.getters.Brochure
    },
    isMenuOpen () {
      return this.$store.state.isMenuOpen
    },
     mainMenuItems () {
      return [
      this.$refs.menuItem1,
      this.$refs.menuItem2,
      this.$refs.menuItem3,
      this.$refs.menuItem4,
      this.$refs.menuItem5,
      this.$refs.menuItem6
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.commit('setMenuOpen', false)
    }
  },
  mounted () {
    this.initTimeline()
  },
  methods: {
    initTimeline () {
      const self = this
      this.$timeline = new TimelineMax({
        paused: true,

        onStart: () => {
          console.log('onStart', menuItems)
          this.menuItems.forEach((component, index) => {
            component.animateIn()
          })
        },
        onComplete: () => {
          console.log('onComplete')
        },
        onReverseComplete: () => {
          console.log('onReverseComplete')
        }
      })

      let adresstext = this.$el.querySelectorAll('.adress-text')
      let adresscontact = this.$el.querySelectorAll('.adress-contact')
      let brochurelink = this.$el.querySelectorAll('.brochure-link')
      let contactlink = this.$el.querySelectorAll('.contact-link')
      let mainlink = this.$el.querySelectorAll('.main-link')

      this.$timeline
      .from (adresstext, 0.5, {
        x: - 40,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (adresscontact, 0.5, {
        x: - 40,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (contactlink, 0.5, {
        y: 80,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (brochurelink, 0.5, {
        y: - 80,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .staggerFrom(mainlink, 0.5 , {
        y: 80,
        color: "black",
      },0.15,"-=0.5")

      this.timelineReady = true;
    },
    start () {
      if (!this.timelineReady) return
        this.animateMenuItemsIn()
      this.$timeline.play()
    },
    reverse () {
      this.animateMenuItemsOut()
      this.$timeline.reverse()
    },
    animateMenuItemsIn () {
      this.mainMenuItems.forEach((component, index) => {
        component.animateIn()
      })
    },
    animateMenuItemsOut () {
      this.mainMenuItems.forEach((component, index) => {
        component.animateOut()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.main-menu {
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  pointer-events: none;
  z-index: 998;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    display: grid;
    height: 100vh;
    grid-template-columns: 20% 30% auto;
    grid-template-rows: 40% 20% 40%;
    grid-template-areas:
    "corner address main"
    "pattern map main"
    "brochure map main";
  }

  .corner-container {
    grid-area: corner;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .adress-container {
    grid-area: address;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      font-size: 12px;
    }
  }

  .pattern-container {
    grid-area: pattern;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .brochure-container {
    grid-area: brochure;
    overflow: hidden;
    display: none;
    cursor: pointer;

    @include media-breakpoint-up(md) {
      display: block;
      font-size: 12px;
    }
  }

  .contact-container {
    grid-area: map;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .main-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .locale-changer {
      position: absolute;
      top: $width-unit / 3;
      left: $width-unit * 2;
      right: auto;

      @include media-breakpoint-up(md) {
        right: $width-unit * 2;
        left: auto;
      }

      .locale-select {
        cursor: pointer;
        padding: 0.5rem 1rem;
        outline: none;
        background: black;
        color: white;
        opacity: 0.5;
      }
    }

    @include media-breakpoint-up(md) {
      grid-area: main;
      display: block;
    }
  }
}

.main-menu {

  .corner {
    background: white;
    width: 100%;
    height: 100%;
  }

  .adress {
    background: #f23030;
    color: white;
    padding: $width-unit/2 $width-unit $width-unit/2 $width-unit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transform-origin: 0 50%;
    z-index: 998;
    width: 100%;
    height: 100%;

    @include media-breakpoint-up(md) {
      padding-top: $width-unit * 2;
      padding-bottom: $width-unit * 2;
    }

    @include media-breakpoint-up(lg) {
      padding: 0;
      padding-top: $width-unit;
      padding-left: $width-unit / 2;
      padding-bottom: $width-unit;
    }

    @include media-breakpoint-up(xl) {
      padding: 0;
      padding-top: $width-unit / 2;
      padding-left: $width-unit;
      padding-bottom: $width-unit / 2;
    }

    .adress-contact {
      .adress-email {
        margin:0;
      }
    }
  }

  .pattern {
    background: black;
    transform-origin: 100% 50%;
    z-index: 998;
    width: 100%;
    height: 100%;
  }

  .brochure {
    background: #f23030;
    position: relative;
    overflow: hidden;
    transform-origin: 100% 50%;
    z-index: 998;
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: none;
    color: white;
    padding-left: $width-unit / 2;
    padding-top: $width-unit / 2;

 }

 .contact {
  position: relative;
  overflow: hidden;
  transform-origin: 50% 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: black;
  background-size: cover;
  background-position: center;
  display: block;
  text-decoration: none;
  color: black;

  .menu-item-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
   }

   .contact-link {
    position: absolute;
    transform: rotate(90deg);
    right: 1rem;
    top: 5rem;
    font-size: 14px;
    font-family: $font-family-monospace;

    &:after {
     content: '';
     height: 1px;
     width: $width-unit * 3;
     background: black;
     position: absolute;
     bottom: 45%;
     left: 5rem;
   }
 }
}

.main {
  background: black;
  padding-top: 100px;
  padding-left: $width-unit * 1.5;
  overflow: hidden;
  transform-origin: 50% 100%;
  z-index: 998;
  width: 100%;
  height: 100%;

//  @include media-breakpoint-up(md) {
//    padding-top: $width-unit * 1.5;
//    padding-left: $width-unit;
//  }
//
//  @include media-breakpoint-up(lg) {
//    padding-top: $width-unit * 1.5;
//  }
//
//  @include media-breakpoint-up(xxl) {
//    padding-top: $width-unit;
//  }

  .main-link {
    text-decoration: none;
    display: block;
    color: white;
    display: flex;
    flex-direction: row;
    margin-bottom: $width-unit;
    opacity: 1;

    @include media-breakpoint-up(sm) {
     margin-bottom: $width-unit / 2;
    }

    @include media-breakpoint-up(lg) {
      opacity: 0.3;
    }

    .main-item {
      width: auto;
      position: relative;
      font-size: 1.5rem;

      @include media-breakpoint-up(md) {
        font-size: 2rem;
      }

      @include media-breakpoint-up(xxl) {
        :hover{
          &:after {
            content: '';
            height: 1px;
            width: $width-unit * 6;
            background: white;
            position: absolute;
            right: calc(1px -#{$width-unit * 6} - 2rem);
            bottom: 45%;
            transform-origin: 0 50%;
            transition: 1s ease-out;
          }
        }
      }
    }
  }

  .main-link:hover {
    opacity: 1;

    .main-item {
      cursor: pointer;
    }
  }
}
}

.clickable {
  pointer-events: all;
}

.menu-item-map {
  width: 100%;
  height: 100%;
}

.main-menu-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.corner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pattern-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

</style>
