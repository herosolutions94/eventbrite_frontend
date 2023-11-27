// rootReducer.ts
import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
