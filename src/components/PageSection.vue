<template>
	<section class="page-section" :class="sectionLayout">
		<div class="section-shape-bottom" ></div>
		<div class="section-container row no-gutters">
			<div class="page-section__media col-sm-16 col-md-8">
				<div class="section-shape-top"></div>
				<div class="page-section__image"></div>
				<div class="section-shape-image"></div>
			</div>
			<div class="page-section__content col-sm-16 col-md-8">
				<h2 class="content__title">{{section.fields.title}}</h2>
				<p class="content__text">{{section.fields.text}}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'page-section',
	props: {
		section: {
			type: Object,
			required: true
		}
	},
	computed: {
		sectionLayout () {
			console.log(' " ' + 'page-section__' + this.section.fields.layout + ' " ')
			return    'page-section__' + this.section.fields.layout
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@design';

.page-section {
  position:relative;
  padding-left: $width-unit;
  padding-right: $width-unit;
  margin-bottom: 200px;

  @include media-breakpoint-up(sm) {
    margin-bottom: 50px;
  }

  @include media-breakpoint-up(md) {
    margin-bottom: 50px;
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: 0;
  }


  .section-container {
    position:relative;
    padding-top: $width-unit;
    padding-bottom: $width-unit;

    .page-section__content {
      height: $width-unit * 5;
      padding-top: $width-unit;
      padding-bottom: $width-unit * 2;

      @include media-breakpoint-up(md) {
        padding-left: $width-unit;
        padding-right: $width-unit;
      }
      .content__title {
        margin-bottom: 2rem;
      }
    }
    .page-section__media {
      position:relative;
      .page-section__image {
        background: gray;
        width: 100%;
        height: $width-unit * 5;

      }
    }
  }

  .section-shape-image {
    position:absolute;
    left:0;
    bottom:0;
    z-index: 3;
    width: $width-unit;
    height: $width-unit;
    background: white;
  }

  .section-shape-top {
    background: black;
    position:absolute;
    top: - $width-unit;
    left: - $width-unit;
    z-index: 2;
    width: $width-unit * 2;
    height: $width-unit * 4;
  }

  .section-shape-bottom {
    background: #eee;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    height: $width-unit * 2;
    width: $width-unit * 15;
  }
}
//layout classes

.page-section__left-1{
  position:relative;
  padding-left: $width-unit;
  padding-right: $width-unit;
  .section-container {
    position:relative;
    padding-top: $width-unit;
    padding-bottom: $width-unit;

    .page-section__content {
      height: $width-unit * 5;
      padding-top: $width-unit;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-bottom: $width-unit * 2;

      @include media-breakpoint-up(md) {
        padding: 0;
        padding-left: $width-unit;
      }

      @include media-breakpoint-up(lg) {
        padding-top: $width-unit;
        padding-left: $width-unit;
        padding-right: $width-unit;
        padding-bottom: $width-unit * 2;
      }
      .content__title {
        margin-bottom: 2rem;

        @include media-breakpoint-up(md) {
          margin-bottom: 1rem;
        }

        @include media-breakpoint-up(lg) {
          margin-bottom: 2rem;
        }
      }
    }
    .page-section__media {
      position:relative;
      .page-section__image {
        background: gray;
        width: 100%;
        height: 300px;

        @include media-breakpoint-up(sm){
          height: 400px;
        }

        @include media-breakpoint-up(md){
          height: $width-unit * 6;
        }

        @include media-breakpoint-up(lg){
          height: $width-unit * 5;
        }
      }
    }
  }

  .section-shape-image {
    display: none;
  }

  .section-shape-top {
    background: black;
    position:absolute;
    top: - $width-unit;
    left: - $width-unit;
    z-index: 2;
    width: $width-unit * 2;
    height: $width-unit * 4;
  }

  .section-shape-bottom {
    display:none;
  }
}

.page-section__right-1 {
  position:relative;
  padding-left: $width-unit;
  padding-right: $width-unit;
  .section-container {
    position:relative;
    padding-top: $width-unit;
    padding-bottom: $width-unit;

    .page-section__content {
      height: $width-unit * 5;
      padding-top: $width-unit;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-bottom: $width-unit * 2;

      @include media-breakpoint-up(md) {
        padding: 0;
        padding-right: $width-unit;
      }

      @include media-breakpoint-up(lg) {
        padding-top: $width-unit;
        padding-left: $width-unit;
        padding-right: $width-unit;
        padding-bottom: $width-unit * 2;
      }

      @include media-breakpoint-up(md) {
        order:1;
      }

      .content__title {
        margin-bottom: 2rem;
      }
    }
    .page-section__media {
      position:relative;

      @include media-breakpoint-up(md) {
        order:2;
      }

      .page-section__image {
        background: gray;
        width: 100%;
        height: 300px;
        margin-top: 20px;

        @include media-breakpoint-up(sm){
          height: 400px;
        }

        @include media-breakpoint-up(md){
          height: $width-unit * 6;
        }

        @include media-breakpoint-up(lg){
          height: $width-unit * 5;
        }
      }
    }

    .section-shape-image {
      display:none;

      @include media-breakpoint-up(sm) {
        display:block;
        position:absolute;
        left:0;
        bottom:0;
        z-index: 3;
        width: $width-unit;
        height: $width-unit;
        background: white;
      }
    }

    .section-shape-top {
      display:none;
    }
  }
  .section-shape-bottom {
    display:none;
 
    @include media-breakpoint-up (md) {
      display:block;
      background: black;
      position:absolute;
      top:0;
      right:0;
      z-index: -1;
      height: $width-unit * 2;
      width: $width-unit * 5;
    }
  }
}

.page-section__left-2 {
  position:relative;
  padding-left: $width-unit;
  padding-right: $width-unit;

  @include media-breakpoint-up(md){
    padding-left: 0;
    padding-right: $width-unit * 2;
  }

  .section-container {
    position:relative;
    padding-top: $width-unit;
    padding-bottom: $width-unit;

    .page-section__content {
      height: $width-unit * 5;
      padding-top: $width-unit;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-bottom: $width-unit * 2;

      @include media-breakpoint-up(md) {
        padding: 0;
        padding-left: $width-unit;
      }

      @include media-breakpoint-up(lg) {
        padding-top: $width-unit;
        padding-left: $width-unit;
        padding-right: $width-unit;
        padding-bottom: $width-unit * 2;
      }

      .content__title {
        margin-bottom: 2rem;
      }
    }
    .page-section__media {
      position:relative;
      .page-section__image {
        background: gray;
        width: 100%;
        height: 300px;

        @include media-breakpoint-up(sm){
          height: 400px;
        }

        @include media-breakpoint-up(md){
          height: $width-unit * 6;
        }

        @include media-breakpoint-up(lg){
          height: $width-unit * 5;
        }

      }
    }
  }

  .section-shape-image {
    display:none;

    @include media-breakpoint-up(md) {
      display: block;
      top: - $width-unit;
      left: $width-unit;
      height: $width-unit * 9;
      width: $width-unit;
      background: #dbdbdd;
      z-index: -1;
    }
  }

  .section-shape-top {
    display:none;
  }

  .section-shape-bottom {
    display:none;
  }
}

.page-section__right-2 {
  position:relative;
  padding-left: $width-unit;
  padding-right: $width-unit;

  @include media-breakpoint-up(md){
    padding-left: $width-unit *2;
    padding-right: 0;
  }

  .section-container {
    position:relative;
    padding-top: $width-unit;
    padding-bottom: $width-unit;

    .page-section__content {
      height: $width-unit * 5;
      padding-top: $width-unit;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-bottom: $width-unit * 2;

      @include media-breakpoint-up(md) {
        padding: 0;
        padding-right: $width-unit;
        order: 1;
      }

      @include media-breakpoint-up(lg) {
        padding-top: $width-unit;
        padding-left: $width-unit;
        padding-right: $width-unit;
        padding-bottom: $width-unit * 2;
      }

      .content__title {
        margin-bottom: 2rem;
      }
    }
    .page-section__media {
      margin-top: 20px;
      position:relative;
 
      @include media-breakpoint-up(md){
        order:2;
        margin-top: 0;
      }
      .page-section__image {
        background: gray;
        width: 100%;
        height: 300px;

        @include media-breakpoint-up(sm){
          height: 400px;
        }

        @include media-breakpoint-up(md){
          height: $width-unit * 6;
        }

        @include media-breakpoint-up(lg){
          height: $width-unit * 5;
        }
      }
    }
  }

  .section-shape-image {
    display:none;
  }

  .section-shape-top {
    background:black;
    position:absolute;
    top: - $width-unit;
    z-index: -1;
    right:0;
    left:auto;
    width: $width-unit * 4;
    height: $width-unit;
  }

  .section-shape-bottom {
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
      background: #dbdbdd;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      height: $width-unit * 2;
      width: $width-unit * 15;
    }
  }
}
</style>
