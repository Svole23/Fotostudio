<template>
	<section class="home-page">
		<div class="container-fluid">
			<div class="row no-gutters">
				<div class="home-page__title col-sm-16 col-md-7">
					<div class="header__wrapper">
						<div class="home-page__header__container">
							<h1 class="title">{{ $t("home.aboutTitle") }}</h1>
							<p class="underline">{{ $t("home.aboutText1") }}
							</p>
						</div>
						<router-link to="/fotograf" class="home-page__link">{{ $t("home.aboutText2") }}</router-link>
					</div>
					<div class="home-page__text">
						<p class="home-page__text__content">{{ $t("home.aboutText3") }}</p>
						<p class="home-page__text__content__second">{{ $t("home.aboutText4") }}</p>
					</div>
				</div>
				<div class="image__container col-sm-16 col-md-9">
					<parallax :speedFactor=".6" :wrapped="true" :absolute="true">
						<img src="../assets/img/Bane_006.jpg" />
					</parallax>
				</div>
			</div>
		</div>
		<home-features/>
		<home-toc/>
		<div class="map-container">
			<contact-map/>
		</div>
	</section>
</template>

<script>
	import HomeToc from './HomeToc.vue'
	import HomeFeatures from './HomeFeatures.vue'
	import ContactMap from './ContactMap'

	export default {
		name: 'home-page',
		components: {
			HomeToc,
			HomeFeatures,
			ContactMap
		}
	}
</script>

<style lang="scss" scoped>
@import "@design";

.home-page {
	padding:0;
	padding-top: $width-unit * 3;

	@include media-breakpoint-up(sm) {
		padding-top: $width-unit *2;
	}

	@include media-breakpoint-up(md) {
		padding-top: 120px;
	}

	@include media-breakpoint-up(lg) {
		padding-top: 130px;
	}

	@include media-breakpoint-up(xl) {
		padding-top: $width-unit;
	}


	.container-fluid {
		padding:0;

		.image__container {
			position: relative;
			padding: 0;
			z-index: -1;
			height: 300px;

			@include media-breakpoint-up(sm) {
				height: auto;
			}

		}

		.home-page__title {
			padding:0;

			.home-page__text {
				padding: $width-unit;

				.home-page__text__title {
					margin-bottom: 20px;
					font-size: 26px;

					@include media-breakpoint-up(sm) {
						font-size: 28px;
						margin-bottom: 2rem;
					}

					@include media-breakpoint-up(lg) {
						font-size: 36px;
						margin-bottom: 4rem;
					}
				}

				.home-page__text__content {
					margin-bottom: 20px;

					@include media-breakpoint-up(sm) {
						margin-bottom: 2rem;
					}

					@include media-breakpoint-up(lg) {
						margin-bottom: 4rem;
					}
				}
			}

			.header__wrapper {
				background: white;
				display:flex;
				flex-direction: column;
				margin-right: 0;

				@include media-breakpoint-up(sm) {
					margin-right: - $width-unit * 2;
					height: auto;
				}

				@include media-breakpoint-up(xl) {
					margin-right: - $width-unit * 2;
					height: calc(100vh - #{ $width-unit * 2 });
					min-height: calc(100vh - #{ $width-unit * 2 });
					max-height: calc(100vh - #{ $width-unit * 2 });
					box-shadow: 3px 19px 25px 1px rgba(0, 0, 0, 0.1);
				}


				.home-page__header__container {
					background:white;
					margin: $width-unit;

					@include media-breakpoint-up(sm) {
						margin: $width-unit;
					}

					@include media-breakpoint-up(md) {
						flex: 1;
						padding-left: $width-unit;
						margin: 0;
					}

					.underline {
						padding-right: $width-unit * 2;
					}

					.title {
						font-size: 36px;
						margin-bottom: 2rem;
						color: black;

						@include media-breakpoint-up(sm) {
							font-size: 40px;
							margin-bottom: 50px;
						}

						@include media-breakpoint-up(md) {
							font-size: 40px;
							margin-bottom: 2rem;
							font-weight: 400;
							letter-spacing: .07em;
						}

						@include media-breakpoint-up(lg) {
							font-size: 50px;
							margin-bottom: 4rem;
							font-weight: 400;
							letter-spacing: .07em;
							padding-top: $width-unit / 1.5;
						}

					}
				}

				.home-page__link {
					padding-left: $width-unit;
					cursor:pointer;
					display:block;
					background:#f23030;
					height: 100px;
					color: white;
					font-size: 24px;
					display:flex;
					align-items: center;
					text-decoration: none;

					@include media-breakpoint-up(md) {
						height: $width-unit * 2;
					}

					@include media-breakpoint-up(xl) {
						height: $width-unit;
					}
				}
			}
		}
	}
}

.map-container {
	width: 100%;
	height: 40vh;
	padding-left: $width-unit;
	padding-right: $width-unit;
	position: relative;

	@include media-breakpoint-up(md) {
		height: 70vh;
	}

	&:before {
		content: '';
		height: 100%;
		width: $width-unit;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
	}
	&:after {
		content: '';
		height: 100%;
		width: $width-unit;
		background: black;
		position: absolute;
		top: 0;
		right: 0;
	}
}

</style>
