import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

import { phonebookReducer } from "./phonebook/phonebookReducer";

const persistConfigPhonebook = {
	key: 'phonebook',
	storage,
}

// const persistedReducerTodo = persistReducer(persistConfigTodo, todoReducer)

const persistedReducerPhonebook = persistReducer(persistConfigPhonebook, phonebookReducer)


export const reducer = {
    phonebok: persistedReducerPhonebook,
}