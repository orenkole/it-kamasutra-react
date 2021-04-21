let store = {
  _subscriber() {
    console.log('no subscribers (observers)')
  },
  _state: {
    firstName: 'it-incubator.by',
    lastName: 'it-kamasutra.com'
  },
  getState() {
    return this.state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  setFirstName(value) {
    this._state.firstName = value;
    this._subscriber();
  }
}

let state = store.getState();
store.setFirstName('samuraiJS.com');
state = store.getState();

store.subscribe (() => {
  let state = store.getState();
  renderPage(state);
})