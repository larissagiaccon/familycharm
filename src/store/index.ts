/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import createSagaMiddleware, { Task } from 'redux-saga'
import { createStore, applyMiddleware, Store } from 'redux'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'

import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'
import { ICartState } from './modules/cart/types'

export interface IState {
    cart: ICartState
}

export interface SagaStore extends Store {
    sagaTask?: Task
}

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore: MakeStore<IState> = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware()

    const store: Store<IState> = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware])
    )

    ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const storeWrapper = createWrapper<IState>(makeStore, { debug: false })
