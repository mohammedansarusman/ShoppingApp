'use client'
import appStore from '@/app/store/appStore'
import { Provider } from 'react-redux'

export const ProviderRedux = ({children}: {children: React.ReactNode}) => {
  return (
        <Provider store={appStore}>
            {children}
        </Provider>
  )
}

