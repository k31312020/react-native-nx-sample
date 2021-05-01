import { combineReducers } from 'redux';
import { productsReducer } from '@selise-react/features/listing';
import { userReducer } from '@selise-react/features/auth';
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