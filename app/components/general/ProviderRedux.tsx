'use client'
import appStore,{persistor} from '@/app/store/appStore'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";


export const ProviderRedux = ({children}: {children: React.ReactNode}) => {
  return (
        <Provider store={appStore}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
  )
}

