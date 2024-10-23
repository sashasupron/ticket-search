import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ticketReducer } from '@/entities/ticket';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const rootRecucer = combineReducers({
    ticket: ticketReducer,  
});



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ticket'],  
};

const persistedReducer = persistReducer(persistConfig, rootRecucer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
