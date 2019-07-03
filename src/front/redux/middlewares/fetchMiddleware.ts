import axios, {Method} from 'axios';
import { Dispatch } from 'redux';

// #region constants
export const FETCH_MOCK = 'FETCH_MOCK';
export const FETCH = 'FETCH';

enum FETCH_TYPE {
  FETCH_MOCK = 'FETCH_MOCK',
  FETCH = 'FETCH'
}
// #endregion

//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//


type FetchAction = {
  fetch: {
    type: FETCH_TYPE,
    actionTypes: {
      request: string,
      success: string,
      fail: string,
    },
    url: string,
    method: Method,
    headers: Object,
    options: Object,
    mockResult?: Object
  }
}

type Store = any

const fetchMiddleware = (store: Store) => (next: Function) => async (action: FetchAction) => {
  if (!action.fetch) {
    return next(action);
  }

  if (
    !action.fetch.type ||
    (action.fetch.type !== FETCH_TYPE.FETCH_MOCK &&
    action.fetch.type !== FETCH_TYPE.FETCH)
  ) {
    return next(action);
  }

  if (!action.fetch.actionTypes) {
    return next(action);
  }

  if (action.fetch.type === FETCH_MOCK) {
    if (!action.fetch.mockResult) {
      throw new Error(
        'Fetch middleware require a mockResult payload when type is "FETCH_MOCK"',
      );
    }

    const {
      actionTypes: { request, success },
      mockResult,
    } = action.fetch;

    // request
    store.dispatch({ type: request });

    // received successful for mock
    return Promise.resolve(
      store.dispatch({
        type: success,
        payload: {
          status: 200,
          data: mockResult,
        },
      }),
    );
  }

  if (action.fetch.type === FETCH) {
    const {
      actionTypes: { request, success, fail },
      url,
      method,
      headers,
      options,
    } = action.fetch;

    // request
    store.dispatch({ type: request });

    // fetch server (success or fail)
    // returns a Promise
    return axios
      .request({
        method,
        url,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Acces-Control-Allow-Origin': '*',
          ...headers,
        },
        ...options,
      })
      .then(data => store.dispatch({ type: success, payload: data }))
      .catch(err => {
        store.dispatch({ type: fail, error: err.response });
        return Promise.reject(err.response);
      });
  }
  return next(action);
};

export default fetchMiddleware as unknown;
