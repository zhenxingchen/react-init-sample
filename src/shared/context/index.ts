import * as React from 'react';

interface IAppState {
  demo: string;
}

interface IAppContext {
  state: IAppState,
  dispatch: (param: {type: string, payload: any}) => void
}

export const AppContextAction = {
  demo: 'demo'
};

export const AppContextReducer = (state: IAppState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case AppContextAction.demo: return { ...state, fundFileMap: action.payload };
  }
  return state;
};

export const AppStateInit: IAppState = {
  demo: 'demo'
};

export const AppContext = React.createContext<IAppContext>({
  state: AppStateInit,
  dispatch: () => {}
});
