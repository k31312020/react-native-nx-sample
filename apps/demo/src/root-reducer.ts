import { combineReducers } from 'redux';
import { productsReducer } from '@selise-react/features/listing';
const rootReducer = combineReducers({
 products: productsReducer,
});
export default rootReducer;