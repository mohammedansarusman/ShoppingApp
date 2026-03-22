'use client'
import appStore from '@/app/store/appStore'
import { Provider } from 'react-redux'

export const ProviderRedux = ({children}) => {
  return (
        <Provider store={appStore}>
            {children}
        </Provider>
  )
}

