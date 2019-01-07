// @flow

// #region singleton store
let store = {};
// #endregion

class LocalStorageMock {
  constructor() {
    store = {};
  }

  clear() {
    store = {};
  }

  getItem(key) {
    return store[key] || null;
  }

  setItem(key, value) {
    store[key] = value;
  }

  removeItem(key) {
    delete store[key];
  }
}

const localStorage = new LocalStorageMock();

if (!window.localStorage) {
  window.localStorage = localStorage;
}

module.exports = localStorage;
