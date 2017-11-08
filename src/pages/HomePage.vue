<template>
    <div class="places-wrapper">
        <div class='places-container'>
            <div v-for="p in allPlaces" class="place" @click="setCenter(p.position)">
                <router-link :to="{name: 'details', params: {id: p.id}}" class="title">{{ p.title }}</router-link>
                <span class="price">$ {{ p.price }}</span>
            </div>
        </div>
        <div class="map-container">
            <gmap-map
                    :center="center"
                    :zoom="7"
                    style="width: 100%; height: 100%"
            >
                <gmap-marker
                        :key="index"
                        v-for="(m, index) in allPlaces"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="setCenter(m.position)"
                ></gmap-marker>
            </gmap-map>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllPlaces()
    },
    computed: {
      ...mapGetters([
        'allPlaces',
        'center'
      ])
    },
    methods: {
      ...mapActions([
        'getAllPlaces',
        'setCenter'
      ])
    }
  }
</script>


<style>
    .place {
        padding: 10px;
        border-bottom: 1px solid #eee;
        width: 100%;
        box-sizing: border-box;
    }
    .title {
        color: #312377;
    }
    .price {
        float: right;
    }
    .places-container {
        position: absolute;
        top: 50px;
        bottom: 0;
        width: 300px;
        left: 0;
        background: #fff;
    }
    .map-container {
        position: absolute;
        top: 50px;
        bottom: 0;
        right: 0;
        left: 300px;
    }
</style>
