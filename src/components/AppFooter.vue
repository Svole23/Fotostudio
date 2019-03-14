<template>
  <div class="app-footer">
    <div class="main">
      <div class="studio">
        <h3>Foto Studio Express</h3>
        <div class="contact_item">
          <p class="item-title">Adresa:</p>
          <p class="item-text">Pilota M. Petrovića 65, Beograd</p>
        </div>
        <div class="contact_item">
          <p class="item-title">Telefon:</p>
          <p class="item-text">011 2321 338 / 063 340 100</p>
        </div>
        <div class="contact_item">
          <p class="item-title">Email:</p>
          <a href="mailto:fotoexpressbg@gmail.com" class="item-text">fotoexpressbg@gmail.com</a>
        </div>
      </div>
      <div class="contact-container">
        <div class="foto">
        <h3>Foto / Video dogadjaji</h3>
        <div class="contact_item">
          <p class="item-title">Telefon:</p>
          <p class="item-text">066 922 3663</p>
        </div>
        <div class="contact_item">
          <p class="item-title">Email:</p>
          <a href="mailto:info@fotostudio.co.rs" class="item-text">info@fotostudio.co.rs</a>
        </div>
      </div>
      </div>
    </div>
    <div class="copy">
      <div class="copyright">
        <span class="copyright-logo">©</span>
        <p class="copyright-text">Copyright Fotostudio Express<span class="numeric"> 2019</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
  }
</script>

<style lang="scss" scoped>
@import '@design';
.app-footer {
  background: black;
  position: relative;
  padding-top: 50px;
  padding-left: $width-unit;

  @include media-breakpoint-up(md) {
    padding-top: 0;
  }

  .numeric {
    font-size: 10px;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-top: $width-unit;
      padding-bottom: 0;
      height: auto;
      position: relative;
    }
  }

  .copy {
    height: 20%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: $width-unit * 2;
    padding-right: 0;
    position: absolute;
    right: $width-unit;
    bottom: $width-unit;

    @include media-breakpoint-up(md) {
      height: $width-unit / 1.7;
      width: 100%;
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-left: $width-unit;
      padding-right: $width-unit;
      align-items: center;
      position: static;
      flex-direction: row;
      justify-content: space-between;
    }

    .copyright {
      display: flex;
      flex-direction: row;
      opacity: 0.3;
      color: white;
      font-size: 9px;
      justify-content: flex-end;
      font-family: $font-family-monospace;

      @include media-breakpoint-up(md) {
        align-items: center;
        justify-content: flex-start;
      }

      .copyright-logo {
        display: block;
        font-size: 14px;
      }

      .copyright-text {
        padding-left: 0.3rem;
        margin:0;
        display: inline;

        @include media-breakpoint-up(md) {
          padding-left: 1rem;
          margin:0;
          display: block;
        }
      }
    }
  }
}

.logo {
  height: 100%;
  max-width: 100%;
  opacity: 0.5;
}

.logo:hover {
  opacity: 1;
}

.studio {
  color: white;
  height: 150px;
  font-size: 12px;
}

.contact_item {
  color: white;
  display: flex;
  flex-direction: row;

  .item-title {
    width: 30%;
    margin: 0;

    @include media-breakpoint-up(md) {
      width: $width-unit;
    }
  }

  .item-text {
    margin: 0;
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
}

.foto {
  color: white;
  height: 150px;
  font-size: 12px;
}
</style>
