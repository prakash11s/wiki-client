// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from "../reducer";
import RootSaga from "../saga";


const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist:['Login',
    'GetProduct',
    'AddProduct',
    'AddProductToCart'],
    
}, reducers);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(RootSaga);

export { store, persistor, sagaMiddleware };
// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

// const configureStore = (initialState) => {
//     const store = createStore(
//         reducers,
//         initialState,
//         applyMiddleware(...middlewares)
//     );

//     sagaMiddleware.run(RootSaga);

//     return store;
// };

// const store = configureStore();

// export default store;