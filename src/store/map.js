import map from '@/api/map'

const state = {
  all: [],
  center: {lat: 10.0, lng: 10.0},
  form: {
    title: '',
    price: '',
    inventory: '',
    position: {lat: 10.0, lng: 10.0}
  }
}

const actions = {
  getPlace ({commit}, place) {
    commit('get_place', place.id)
  },
  getAllPlaces ({commit}) {
    map.getPlaces(places => {
      commit('recieve_places', places)
    })
  },
  setCenter ({commit}, center) {
    commit('set_center', center)
  },
  addPlace ({commit, state}, e, errors) {
    e.preventDefault()
    console.log('errors', arguments)
    const {title, price, inventory, position} = state.form
    const form = {
      id: new Date().getTime(),
      title,
      price,
      inventory,
      position
    }
    commit('add_place', form)
    state.form.title = ''
    state.form.price = ''
    state.form.inventory = ''
    state.form.position = state.center
  },
  setCoords ({state}, e) {
    state.form.position = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    console.log('state.form.position', state.form.position)
  }
}

const mutations = {
  recieve_places (state, places) {
    state.all = places
  },
  get_place (state, placeId) {
    state.all.find(p => p.id === placeId).inventory--
  },
  set_center (state, center) {
    state.center = center
  },
  add_place (state, place) {
    state.all.push(place)
  }
}

const getters = {
  allPlaces (state) {
    return state.all
  },
  center () {
    return state.center
  },
  form () {
    return state.form
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
