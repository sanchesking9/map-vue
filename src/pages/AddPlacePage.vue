<template>
  <div class="add-place">
    <form @submit="addPlace($event, errors)">
      <label>
        <span :class="{'is-danger-title': errors.has('title')}">Name:</span>
        <input type="text" v-validate="'required'" name="title" v-model="form.title" :class="{'is-danger': errors.has('title')}">
      </label>
      <label>
        <span :class="{'is-danger-title': errors.has('price')}">Price:</span>
        <input v-validate="'required|decimal'" name="price" type="text" v-model="form.price" :class="{'is-danger': errors.has('price')}">
      </label>
      <label>
        <span :class="{'is-danger-title': errors.has('inventory')}">Free rooms:</span>
        <input v-validate="'required|decimal'" name="inventory" type="text" v-model="form.inventory" :class="{'is-danger': errors.has('inventory')}">
      </label>
      <gmap-map
              :center="form.position"
              :zoom="7"
              style="width: 100%; height: 300px"
              @click="setCoords($event)"
      >
        <gmap-marker
                :position="form.position"
                :clickable="true"
                :draggable="true"
        ></gmap-marker>
      </gmap-map>
      <div>
        <button :disabled="errors.any()">Save</button>
      </div>
    </form>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
export default {
  computed: {
    ...mapGetters([
      'form',
      'center'
    ])
  },
  methods: {
    ...mapActions([
      'addPlace',
      'setCoords'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add-place {
    background: #fff;
    width: 1000px;
    margin: 20px auto;
    padding: 10px;
  }
  label {
    display: block;
    margin: 5px 0;
  }
  label span {
    display: inline-block;
    width: 150px;
  }
  input {
    background: #f2f2f3;
    width: 600px;
    padding: 10px;
    border: 0;
  }
  .is-danger {
    border: 1px solid red;
  }
  .is-danger-title {
    color: red;
  }
</style>
