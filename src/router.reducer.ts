import {connectRouter} from 'connected-react-router';
import {history} from './app.router';

const RouterReducer = connectRouter(history);

export default RouterReducer;
