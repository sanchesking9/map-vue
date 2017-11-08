const _places = [
  {'id': 1, 'title': 'Hotel Avenue', 'price': 500.01, 'inventory': 2, position: {lat: 10.0, lng: 10.0}},
  {'id': 2, 'title': 'Hostel Town', 'price': 10.99, 'inventory': 10, position: {lat: 11.0, lng: 11.0}},
  {'id': 3, 'title': 'Hostel Moon', 'price': 19.99, 'inventory': 5, position: {lat: 12.0, lng: 12.0}}
]

export default {
  getPlaces (cb) {
    setTimeout(() => cb(_places), 100)
  },

  getPlace (place, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
