import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const initialStore = {
	selectedCategory: '',
	selectedProductDetails: null,
};

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));
export default store;
