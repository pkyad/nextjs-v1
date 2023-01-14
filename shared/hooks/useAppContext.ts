import { useContext } from 'react'
import appContext from '../appContext'
import { AppContextInterface } from '../types'

const useAppContext = (): AppContextInterface => {
  return useContext(appContext)
}
export default useAppContext
