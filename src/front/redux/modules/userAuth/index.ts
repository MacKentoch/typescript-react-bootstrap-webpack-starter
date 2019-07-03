
import { Dispatch  } from 'redux'
import {} from 'redux-thunk'
import appConfig from '../../../config/appConfig';
import userInfosMockData from '../../../mock/userInfo.json'
import { getLocationOrigin } from '../../../services/API/fetchTools';
import auth from '../../../services/auth';
import { State } from './types'


// #region CONSTANTS
const REQUEST_USER_INFOS_DATA: string = 'REQUEST_USER_INFOS_DATA';
const RECEIVED_USER_INFOS_DATA: string = 'RECEIVED_USER_INFOS_DATA';
const ERROR_USER_INFOS_DATA: string = 'ERROR_USER_INFOS_DATA';

const REQUEST_LOG_USER: string = 'REQUEST_LOG_USER';
const RECEIVED_LOG_USER: string = 'RECEIVED_LOG_USER';
const ERROR_LOG_USER: string = 'ERROR_LOG_USER';

const CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

const DISCONNECT_USER = 'DISCONNECT_USER';
// #endregion

// #region types
type ActionType =
  | 'REQUEST_USER_INFOS_DATA'
  | 'RECEIVED_USER_INFOS_DATA'
  | 'ERROR_USER_INFOS_DATA'
  | 'REQUEST_LOG_USER'
  | 'RECEIVED_LOG_USER'
  | 'ERROR_LOG_USER'
  | 'CHECK_IF_USER_IS_AUTHENTICATED'
  | 'DISCONNECT_USER'
  | 'FETCH_MIDDLEWARE';

type OptionalStateProps = Partial<State>
type Action = {
  type: ActionType,
  data?: any | Array<any>,
  error?: any,
  payload?: any,
} & OptionalStateProps;
// #endregion

// #region REDUCER

// #region initial State
const initialState: State = {
  // actions details
  isFetching: false,
  isLogging: false,
  // userInfos
  id: '',
  email: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false, // authentication status (token based auth)
};
// #endregion

// #region reducer
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED: {
      const {isAuthenticated = false, token = initialState.token} = action

      return {
        ...state,
        isAuthenticated,
        token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login:
          action.user && action.user.login
            ? action.user.login
            : initialState.login,
        firstname:
          action.user && action.user.firstname
            ? action.user.firstname
            : initialState.firstname,
        lastname:
          action.user && action.user.lastname
            ? action.user.lastname
            : initialState.firstname,
      };
    }

    case DISCONNECT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
      };

    // user login (get token and userInfo)
    case REQUEST_LOG_USER:
      return {
        ...state,
        isLogging: true,
      };

    case RECEIVED_LOG_USER: {
      const {
        // $FlowIgnore
        data: { token, id, login, firstname, lastname },
      } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        token: token,
        id: id,
        login: login,
        firstname: firstname,
        lastname: lastname,
        isLogging: false,
      };
    }

    case ERROR_LOG_USER:
      return {
        ...state,
        isAuthenticated: false,
        isLogging: false,
      };

    // not used right now:
    case REQUEST_USER_INFOS_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVED_USER_INFOS_DATA:
      const userInfos = action.payload.data;

      return {
        ...state,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname,
      };

    case ERROR_USER_INFOS_DATA:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region disconnect user
export function disconnectUser(): Action {
  auth.clearAllAppStorage();
  return { type: DISCONNECT_USER };
}
// #endregion

// #region check if user is connected
export function checkUserIsConnected(): Action {
  const token = auth.getToken();
  const user = auth.getUserInfo();
  const checkUserHasId = (obj: any) => obj && (obj.id || false);
  const isExpired = auth.isExpiredToken(token);
  const isAuthenticated = token && checkUserHasId(user) ? true : false;

  return {
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token,
    ...user,
    isAuthenticated: isAuthenticated && !isExpired,
  };
}
// #endregion

// #region loguser
function logUser(login: string, password: string) {
  return async (dispatch: Dispatch<Action>): Promise<any> => {
    const FETCH_TYPE = appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
    const __SOME_LOGIN_API__ = 'login';

    const mockResult = userInfosMockData; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    const url = `${getLocationOrigin()}/${__SOME_LOGIN_API__}`;
    const method = 'post';
    const headers = {};
    const options = {
      credentials: 'same-origin',
      data: {
        login,
        password,
      },
    };

    // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)
    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_LOG_USER,
          success: RECEIVED_LOG_USER,
          fail: ERROR_LOG_USER,
        },
        // mock fetch props:
        mockResult,
        // real fetch props:
        url,
        method,
        headers,
        options,
      },
    });
  };
}

export function logUserIfNeeded(
  email: string,
  password: string,
) {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ userAuth: State }>,
  ): Promise<any> => {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }
    return Promise.resolve();
  };
}
function shouldLogUser(state: { userAuth: State }): boolean {
  const { isLogging } = state.userAuth;
  return !isLogging;
}

function fetchUserInfosData(id: string = '') {
  return async (dispatch: Dispatch<Action>) => {
    const token = auth.getToken();
    const {
      DEV_MODE,
      api: { users },
    } = appConfig;
    const FETCH_TYPE = DEV_MODE ? 'FETCH_MOCK' : 'FETCH';

    const mockResult = userInfosMockData; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    const url = `${getLocationOrigin()}/${users}/${id}`;
    const method = 'get';
    const headers = { authorization: `Bearer ${token || ''}` };
    const options = { credentials: 'same-origin' }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA,
        },
        // mock fetch props:
        mockResult,
        // real fetch props:
        url,
        method,
        headers,
        options,
      },
    });
  };
}

export function fetchUserInfoDataIfNeeded(id: string = '') {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ userAuth: State }>,
  ) => {
    if (shouldFetchUserInfoData(getState())) {
      // $FlowIgnore
      return dispatch(fetchUserInfosData(id));
    }
    return Promise.resolve();
  };
}

function shouldFetchUserInfoData(state: { userAuth: State }): boolean {
  const { isFetching } = state.userAuth;
  return !isFetching
}
