import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { IStateScheme } from '@/typings/IStateSchema';
import { createReduxStore } from './store';

interface IStoreProvider {
  children?: ReactNode;
  initialState?: IStateScheme;
}

export const StoreProvider = (props: IStoreProvider) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
