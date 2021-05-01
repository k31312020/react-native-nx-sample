import { combineReducers } from 'redux';
import { productsReducer } from '@selise-react/features/listing';
import { userReducer } from '@selise-react/features/auth';
<<<<<<< HEAD
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'Auth',
    storage,
    whiteList: ['user']
}

const rootReducer = combineReducers({
 products: productsReducer,
 user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
=======
import { errorReducer } from './error-reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  error: errorReducer,
});
>>>>>>> 3f38b39cb5677aeefd942b8e0a89ebfb7a415c16
