import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { logger } from './logger';
import { crashReporter } from './crash-reporter';
import { history } from './history';

export default applyMiddleware(thunk, logger, crashReporter, history);
