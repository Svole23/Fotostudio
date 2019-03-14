<template>
	<section class="page">
		<div class="page-header">
			<h3 class="page-header__title">{{page.fields.page_header}}</h3>
			<span class="page-header__path"><router-link class="router-link" to="/">{{ $t("page.link") }}</router-link> / {{page.slug}}</span>
		</div>
		<div class="page-content">
			<div class="image-container" v-for="(image,index) in page.fields.page_images" >
			<vue-load-image>
				<img slot="image" class="page-image" :src="getImageSrc(image.title)">
      			<div slot="preloader">{{ $t("page.loader") }}</div>
      			<div slot="error">{{ $t("page.error") }}</div>
    		</vue-load-image>
		</div>
	</div>
</section>
</template>
<script>
	import PageSection from './PageSection.vue'
	import VueLoadImage from 'vue-load-image'
	export default {
		name:'Page',
		components: {
			PageSection,
			VueLoadImage
		},
		computed: {
			page () {
				if(this.$i18n.locale === 'english') {
					return this.$store.getters.getPageBySlugEn(this.$route.params.slug)
				}
				return this.$store.getters.getPageBySlugSrb(this.$route.params.slug)
			},
			sections () {
				console.log(this.$store.getters.getPageSectionsBySlug(this.$route.params.slug))
				return this.$store.getters.getPageSectionsBySlug(this.$route.params.slug)
			}
		},
		methods: {
			getImageSrc (input) {
				return require('@/assets/img/' + input)
			},
		}
	}
</script>

<style lang="scss" scoped>
@import '@design';
.page {
	padding-top: 120px;
	position:relative;

	@include media-breakpoint-up(md) {
		padding-top: $width-unit;	
	}
	.page-header {

		.router-link {
			color:inherit;
		}
		.page-header__title {
			margin: $width-unit;

			@include media-breakpoint-up(sm) {
				margin: $width-unit;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: $width-unit * 2;
				margin-left: $width-unit; 
				margin-right: 100px;
				height: 100px;
				margin-top: $width-unit * 2;
			}

			@include media-breakpoint-up(xl) {
				margin-bottom: $width-unit;
				margin-left: $width-unit; 
				margin-right: 100px;
				height: 100px;
				margin-top: $width-unit;
			}

		}
		.page-header__path {
			display:block;
			margin-left:$width-unit;
			font-size: .8rem;
			color: rgba(0,0,0,.56);
			margin-bottom:$width-unit / 2;
		}
	}

	.page-content {
		height: auto;
		width: 100%;
		background: black;
		padding-top: $width-unit * 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.page-content__link {
			color: inherit;
		}
		.page-content__title {
			font-size: .90rem;
			letter-spacing: .1em;
			font-weight: 600;
			color: hsla(0,0%,100%,.56);
			text-transform: uppercase;

			@include media-breakpoint-up(sm) {
				margin-bottom: 0;
			}

			@include media-breakpoint-up(md) {
				margin-bottom: 1rem;
			}

			@include media-breakpoint-up(lg) {
				margin-bottom: 2rem;
			}

		}
	}
}

.image-container {
	height: auto;
	max-width: 100vw;
	margin-top: $width-unit;
	margin-bottom: $width-unit;

	.page-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
	}
}

.preloader {
	color: white;
}

.error {
	color: white;
}
</style>