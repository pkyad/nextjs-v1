import { createContext } from 'react'
import initialState from './state'
import { AppContextInterface } from './types'

const appContext = createContext<AppContextInterface>(initialState)
export default appContext
