<template>
	<div class="feature" :id="'feature' + index">
		<div class="feature__image">
			<img class="image" :src="getImageSrc" />
		</div>
		<router-link :to="'/' + getPageSlug" class="feature__content">
			<span class="feature__content__overline">{{page.fields.toc_header}}</span>
			<h2 class="feature__content__title">{{page.fields.overview_title}}</h2>
			<div class="feature__content__text" v-html="getFeatureContent" />
			<span class="feature__content__link">{{ $t("features.link") }}</span>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'feature',
	props: {
		page: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			default: 0
		}
	},
	computed: {
		getImageSrc () {
			return require('@/assets/img/' + this.page.fields.overview_image)
		},
		getPageSlug () {
			return this.page.slug
		},
		getFeatureContent () {
			return this.page.fields.overview_text
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@design";

.feature {
	max-height: auto;
	margin-bottom: 20px;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow:hidden;
	padding: $width-unit;

	@include media-breakpoint-up(md) {
		position: relative;
		display: flex;
		flex-direction: row;
		overflow:hidden;
		margin-top: 0;
		margin-bottom: 0;
		padding: 0;
		max-height: 500px;
	}

	@include media-breakpoint-up(lg) {
		position: relative;
		display: flex;
		flex-direction: row;
		overflow:hidden;
		margin-bottom: 0;
		padding: 0;
	}

	.feature__image {
		position:relative;
		order:1;
		height: $width-unit * 9;
		width:100%;
		min-width:100%;

		.image {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}

		@include media-breakpoint-up(sm) {
			position:relative;
			order:1;
			height: $width-unit * 9;
			width:100%;
			min-width:100%;
		}

		@include media-breakpoint-up(md) {
			position:relative;
			order:1;
			height: $width-unit * 6;
			min-width: $width-unit * 9;
			max-width: $width-unit * 9;
			flex: 0 0 $width-unit * 9;
		}

		@include media-breakpoint-up(lg) {
			position:relative;
			order:1;
			height: $width-unit * 6;
			min-width: $width-unit * 9;
			max-width: $width-unit * 9;
			flex: 0 0 $width-unit * 9;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}

	.feature__content {
		order:2;
		box-sizing: border-box;
		background: white;
		width:100%;
		min-width:100%;
		margin-top: $width-unit;
		margin-bottom: $width-unit;
		text-decoration: none;
		color: black;

		@include media-breakpoint-up(sm) {
			order:2;
			box-sizing: border-box;
			background: white;
			width:100%;
			min-width:100%;
			margin-top: $width-unit;
			margin-bottom: $width-unit;
		}

		@include media-breakpoint-up(md) {
			order:2;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
			padding-left: $width-unit;
			pading-right: $width-unit;
			padding-top: 0;
			box-sizing: border-box;
			background: white;
			margin-top: 0;
			margin-bottom: $width-unit / 2;
		}

		@include media-breakpoint-up(xl) {
			order:2;
			min-width: $width-unit * 7;
			max-width: $width-unit * 7;
			flex: 0 0 $width-unit * 7;
			padding-left: $width-unit;
			padding-right: $width-unit;
			padding-top: $width-unit / 2;
			box-sizing: border-box;
			background: white;
			margin-top: 0;
			margin-bottom: 0;
		}

		.feature__content__title {
			margin-top: 2rem;
			font-size: 24px;
			margin-bottom: 2rem;
			font-weight: 400;
    	letter-spacing: .02em;

			@include media-breakpoint-up(sm) {
				margin-top: 2rem;
				font-size: 24px;
				margin-bottom: 2rem;
				font-weight: 400;
    		letter-spacing: .02em;
			}

			@include media-breakpoint-up(md) {
				margin-top: 1rem;
				font-size: 24px;
				margin-bottom: 1rem;
				font-weight: 400;
    		letter-spacing: .02em;
			}

			@include media-breakpoint-up(lg) {
				margin-top: 2rem;
				font-size: 2rem;
				margin-bottom: 2rem;
				font-weight: 400;
    		letter-spacing: .02em;
			}
		}

		.feature__content__text {
			margin-top: 0;
    	margin-bottom: 1rem;

			@include media-breakpoint-up(sm) {
				margin-top: 0;
    		margin-bottom: 1rem;
    		padding-right: 0;
			}
			
			@include media-breakpoint-up(md) {
				margin-top: 0;
    		margin-bottom: 1rem;
    		padding-right: $width-unit;
    		font-size: 12px;
			}


			@include media-breakpoint-up(lg) {
				margin-top: 0;
				margin-bottom: 2rem;
				padding-right: $width-unit;
				font-size: inherit;
			}
		}
	}
}

.feature__content__overline {
	font-size: 12px;
}

.feature__content__link {
	color: #f23030;
}
</style>
