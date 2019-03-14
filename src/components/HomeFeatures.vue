<template>
	<section class="section-home-features">
		<div class="container-fluid">
			<div class="section-header">
				<h2 class="section-header__title">{{ $t("home.featuresTitle") }}</h2>
			</div>
			<div class="section-features">
				<feature 
					v-for="(page, index) in getPages" 
					:page="page" 
					:index="index"
					:key="index"/>
			</div>
		</div>
	</section>
</template>

<script>
import Feature from './Feature.vue'

export default {
	name: 'home-features',
	components: {
		Feature
	},
	computed: {
		getPages () {
			if(this.$i18n.locale === 'english') {
				return this.$store.getters.getPagesEn
			}
			return this.$store.getters.getPagesSrb
		}
	}
}
</script>

<style lang="scss">
@import "@design";
.section-home-features {
	padding: 0;
	width: 100%;
	position: relative;
	margin-top:$width-unit;
	.container-fluid {
		padding: 0;
	}

	.section-header__title {
		margin-left: $width-unit;
		margin-bottom: $width-unit;
		font-size: 21px;
		font-weight: 400;
		line-height: 1.2;
		@include media-breakpoint-up(sm) {
			margin-left: $width-unit;
			margin-bottom: $width-unit;
			font-size: 24px;
			font-weight: 400;
			line-height: 1.2;
		}
		@include media-breakpoint-up(md) {
			font-size: 36px;
			font-weight: 400;
			padding-bottom: $width-unit;
			padding-left: $width-unit;
		}
		@include media-breakpoint-up(lg) {
			font-size: 1.4rem;
			font-weight: 400;
			padding-bottom: $width-unit / 2;
			padding-left: $width-unit * 2;
			padding-right: $width-unit * 2;
			margin-bottom: 2.5rem;
		}

	}

}

.feature:nth-child(2) {
	padding-top: $width-unit;

	@include media-breakpoint-up(sm) {
		padding-top: $width-unit;
	}
	@include media-breakpoint-up(md) {
		padding-left: $width-unit;
		padding-top: 0;
	}

	@include media-breakpoint-up(xl) {
		padding-left: $width-unit * 2;
		padding-top: 0;
	}

	.feature__image {
		order: 1;
		min-width: 100%;
		max-width: 100%;
		flex: 0 0 1;
		@include media-breakpoint-up(sm) {
			order: 1;
			min-width: 100%;
			max-width: 100%;
			flex: 0 0 1;
		}
		@include media-breakpoint-up(md) {
			order: 2;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

		@include media-breakpoint-up(lg) {
			order: 2;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

	}
	.feature__content {
		order: 2;
		min-width: 100%;
		max-width: 100%;
		flex: 0 0 1;
		@include media-breakpoint-up(sm) {
			order: 2;
			min-width: 100%;
			max-width: 100%;
			flex: 0 0 1;
		}
		@include media-breakpoint-up(md) {
			order: 1;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

		@include media-breakpoint-up(lg) {
			order: 1;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

	}
}

.feature:nth-child(3) {
	min-width: 100%;
	max-width: 100%;
	flex: 0 0 1;
	@include media-breakpoint-up(sm) {
		min-width: 100%;
		max-width: 100%;
		flex: 0 0 1;
	}
	@include media-breakpoint-up(md) {
		padding-left: $width-unit * 2;
		padding-bottom: $width-unit;
	}

	@include media-breakpoint-up(xl) {
		padding-left: $width-unit * 2;
		padding-bottom: $width-unit;
	}

	.feature__image {
		min-width: 100%;
		max-width: 100%;
		flex: 0 0 1;
		object-fit: cover;
		@include media-breakpoint-up(sm) {
			min-width: 100%;
			max-width: 100%;
			flex: 0 0 1;
		}
		@include media-breakpoint-up(md) {
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

		@include media-breakpoint-up(lg) {
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

	}

	.feature__content {
		min-width: 100%;
		max-width: 100%;
		flex: 0 0 1;
		@include media-breakpoint-up(sm) {
			min-width: 100%;
			max-width: 100%;
			flex: 0 0 1;
		}
		@include media-breakpoint-up(md) {
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

		@include media-breakpoint-up(lg) {
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
		}

	}

	&:after {
		display:none;
		@include media-breakpoint-up(sm) {
			display:none;
		}
		@include media-breakpoint-up(md) {
			display:none;
		}
		@include media-breakpoint-up(lg) {
			display:block;
			content: " ";
			position: absolute;
			left: 0;
			bottom: 0;
			height: 100%;
			width: calc(100% - #{ $width-unit * 3 });
			background: black;
			background-size: cover;
			z-index: -1;
		}

		//#f23030

	}
}

</style>
