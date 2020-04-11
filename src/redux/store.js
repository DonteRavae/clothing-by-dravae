import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleswares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleswares));

export const persistor = persistStore(store);