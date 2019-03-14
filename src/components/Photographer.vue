<template>
	<section class="section-photographer">
		<div class="side-div">
			<span class="side-div__text">{{ $t("photographer.sidetext") }}</span>
		</div>
		<h3 class="section-title">{{ $t("photographer.title") }}</h3>
		<div class="row">
			<div class="col-sm-16 col-md-8 column">
				<p class="photographer-text">{{ $t("photographer.text1") }}</p>
			</div>
			<div class="col-sm-16 col-md-8 column">
				<div class="photographer__image-container">
					<img class="image" src="@/assets/img/photo_1.jpg">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-16 col-md-8 column">
				<div class="photographer__image-container">
					<img class="image" src="@/assets/img/photo_2.jpg">
				</div>
			</div>
			<div class="col-sm-16 col-md-8 column">
				<p class="photographer-text">{{ $t("photographer.text2") }}</p>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: 'photographer',
}
</script>

<style lang="scss" scoped>
@import "@design";
.section-photographer {
	padding-top: $width-unit;
	position: relative;
	padding-top: 120px;

	@include media-breakpoint-up(md) {
		padding-top: 0;
	}

	&:after {
		content: '';
		height: 100%;
		width: $width-unit;
		background: black;
		position: absolute;
		right: 0;
		top: $width-unit;
	}

	.side-div {
		position: absolute;
		left: 0;
		top: $width-unit * 11.2;
		height: $width-unit;
		width: $width-unit * 7;
		display: none;
		justify-content: center;
		align-items: center;
		background: #f23030;
		color: white;
		transform: rotate(-90deg);
		transform-origin: top left;

		@include media-breakpoint-up(md) {
			display: flex;
		}
	}

	.section-title {
	margin: $width-unit;
    margin-right: $width-unit;
    height: auto;

    @include media-breakpoint-up(md) {
    	height: auto;
    	margin-right: 100px;
    	margin-top: 150px;
    }
	}

	.row {
		margin-top: $width-unit;
		margin-bottom: $width-unit;
		padding-left: $width-unit;
		padding-right: $width-unit;
		height: 600px;
		max-width: 100%;
		overflow: hidden;

		.column {
		.image {
			max-height: 600px;
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: none;

			@include media-breakpoint-up(md) {
				display: block;
			}
		}

		.photographer-text {
			padding: 0;
			font-size: 12px;

			@include media-breakpoint-up(md) {
				padding: $width-unit / 2;
				font-size: inherit;
			}
		}
		}
	}
}

.photographer__image-container {
	height: 100%;
}

</style>