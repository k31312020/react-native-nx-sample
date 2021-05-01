import { combineReducers } from 'redux';
import { productsReducer } from '@selise-react/features/listing';
import { userReducer } from '@selise-react/features/auth';

export const rootReducer = combineReducers({
 products: productsReducer,
 user: userReducer
});