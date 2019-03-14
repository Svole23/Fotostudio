<template>
  <section class="section-home-toc">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="section-sidebar col-sm-1 col-md-2">
          <div class="section-sidebar__text">{{ $t("services.title") }}</div>
        </div>
        <div class="section-main col-sm col-md-14">
          <div class="container-fluid">
            <div class="toc row no-gutters">
              <div class="toc-col col-sm-16 col-md-4 col-lg-4" v-for="(item, index) in items" :key="index">
                <toc-item :item="item" :index="index"/> 
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TocItem from './TocItem.vue'
  export default {
    name: 'home-toc',
    components: {
      TocItem
    },
    computed: {
      items () {
        if(this.$i18n.locale === 'english') {
          return this.$store.getters.getServicesEn
        }
        return this.$store.getters.getServicesSrb
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@design";

.section-home-toc {
  position: relative;
  height: 100%;

  @include media-breakpoint-up(md) {
    height: 90vh;
  }

  @include media-breakpoint-up(lg) {
    height: 50vh;
  }

  @include media-breakpoint-up(xl) {
    height: 100%;
  }

  .row {
    height: 100%;
  }

  .container-fluid {
    padding: 0;
    position: relative;

    .section-sidebar {
      padding: $width-unit 0;
      background: black;
      
      .section-sidebar__text {
          display:block;
          white-space: nowrap;
          display: inline-block;
          color: #fff;
          transform: translateX(-100%) rotate(270deg);
          transform-origin: 100% 50%;
          margin-left: 50%;
          
          &:before {
            content: " ";
            margin-bottom: 4px;
            margin-right: 30px;
            display: inline-block;
            height: 2px;
            width: 350px;
            background-color: #fff;
          }

        @include media-breakpoint-up(md){
          white-space: nowrap;
          display: inline-block;
          color: #fff;
          transform: translateX(-100%) rotate(270deg);
          transform-origin: 100% 50%;
          margin-left: 50%;
          
          &:before {
            content: " ";
            margin-bottom: 4px;
            margin-right: 30px;
            display: inline-block;
            height: 2px;
            width: 700px;
            background-color: #fff;
          }
        }

        @include media-breakpoint-up(lg){
          white-space: nowrap;
          display: inline-block;
          color: #fff;
          transform: translateX(-100%) rotate(270deg);
          transform-origin: 100% 50%;
          margin-left: 50%;
          
          &:before {
            content: " ";
            margin-bottom: 4px;
            margin-right: 30px;
            display: inline-block;
            height: 2px;
            width: 355px;
            background-color: #fff;
          }
        }
      } 
    }
  }

  .section-main {
    padding-top: $width-unit;
    padding-left:  2rem;
    padding-right: 2rem;
    padding-bottom: $width-unit * 2;
  }

  .toc {
    .toc-col {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 400px;

      &:nth-child(2) {
        margin-bottom: 250px;
        @include media-breakpoint-up(md) {
          margin-bottom: 0;
        }
      }

      &:nth-child(3) {
        margin-bottom: 250px;

        @include media-breakpoint-up(md) {
          margin-bottom: 0;
        }
      }
     
      @include media-breakpoint-up(md) {
        margin-left: $width-unit /2;
        padding-right: $width-unit / 2;
        margin-bottom: 0;
      }

      .toc-item {
        flex: 1;
      }
    }
  }
}

</style>
