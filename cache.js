const store = new Map([])

const cache = {
  add: function (key, value) {
    store.set(key, value)
  },
  get: function (key) {
    return store.get(key)
  },
}

export default cache
