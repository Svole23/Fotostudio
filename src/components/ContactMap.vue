<template>
  <div id="Map">
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 100%; "
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "googlemaps",
  data() {
    return {
      center: { lat: 42.2508926, lng: -71.036638 },
      markers: [],
      places: [],
      currentPlace: { lat: 42.2508926, lng: -71.036638 }
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  #Map {
    height: 100%;
    width: 100%;
  }
</style>