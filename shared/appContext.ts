import {createContext} from 'react';

interface AppContextInterface {
    setMessage : (args : any) => void,
    navigateToSignIn : () => void
}

const appContext = createContext<AppContextInterface | null>(null);

export default appContext;