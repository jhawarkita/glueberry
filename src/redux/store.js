import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {persistStore} from "redux-persist";

const initialStore = {
	selectedCategory: '',
	selectedProductDetails: null,
	categoryProducts:[],
	favoriteProducts:[]
};

export const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));
export const persistor = persistStore(store)
export default {store, persistor};