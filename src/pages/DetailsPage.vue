<template>
    <div class="place-item">
        <router-link to="/" class="back-link">BACK</router-link>
        <div class="place-title">{{ place.title }}</div>
        <div class="place-details">
            <div class="inventory">Free rooms: {{ place.inventory }}</div>
            <div class="inventory">Price: {{ place.price }}</div>
        </div>
        <gmap-map
                :center="place.position"
                :zoom="7"
                style="width: 100%; height: 300px"
        >
            <gmap-marker
                    :position="place.position"
                    :clickable="true"
                    :draggable="true"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllPlaces()
    },
    computed: {
      ...mapGetters([
        'allPlaces'
      ]),
      place () {
        let id = parseInt(this.$route.params.id)
        return this.allPlaces.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllPlaces'
      ])
    }
  }
</script>

<style>
    .place-item {
        margin: 20px auto;
        width: 1000px;
        background: #fff;
        padding: 10px;
    }
    .back-link {
        font-size: 20px;
    }
    .place-title {
        padding-top: 120px;
        text-align: center;
        margin: 0 auto;
        font-size: 26px;
    }
    .place-details {
        margin-top: 120px;
    }
    .inventory {
        font-size: 20px;
        margin-top: 15px;
    }
</style>
