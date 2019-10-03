import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { actionToPlainObject } from './middlewares/action-purify.middleware';
import { epicMiddleware } from './middlewares/epic.middleware';
import { AppStore } from './models';
import { rootEpic } from './root-epic';
import { rootReducer } from './root-reducer';

const loggerMiddleware = createLogger();

const enhancer = __DEV__
    ? compose(applyMiddleware(actionToPlainObject, epicMiddleware, loggerMiddleware))
    : compose(applyMiddleware(actionToPlainObject, epicMiddleware));

export const store: AppStore = createStore(rootReducer, {}, enhancer);

epicMiddleware.run(rootEpic);
