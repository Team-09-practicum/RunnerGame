import { IStateSchema } from '@/typings/IStateSchema';

export const getIsAuth = (state: IStateSchema) => state.appStatus.isAuth;

export const getLoadingStatus = (state: IStateSchema) => state.appStatus.loading;

export const getIsSoundOn = (state: IStateSchema) => state.appStatus.isSoundOn;
