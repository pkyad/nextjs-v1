import { createContext } from 'react';
import initialState from './state';
import { IAgent, IAppState } from './types';

interface AppContextInterface extends IAppState {
    setMessage?: (args: any) => void,
    navigateToSignIn?: () => void,
    setSession?: (token: string) => void
}

const appContext = createContext<AppContextInterface>(initialState);

export default appContext;