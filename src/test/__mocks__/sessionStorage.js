// @flow

// #region singleton store
let store = {};
// #endregion

class SessionStorageMock {
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

const sessionStorage = new SessionStorageMock();

if (!window.sessionStorage) {
  window.sessionStorage = localStorage;
}

module.exports = sessionStorage;
