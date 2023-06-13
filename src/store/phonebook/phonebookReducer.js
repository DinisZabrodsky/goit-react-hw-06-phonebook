import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './initialState'


const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState, 
    reducers: {
        addContactsReducer: (state, { payload }) => {
            console.log(payload)
            state.contacts.push(payload)
        },

        deleteContactsReducer: (state, { payload }) => {
            state.filter((contact) => contact.id !== payload)
        },

        addFilterReducer: (state, {payload}) => {
            state.filter = payload
        }
    }
})

export const phonebookReducer = phonebookSlice.reducer
export const {addContactsReducer, deleteContactsReducer, addFilterReducer} = phonebookSlice.actions
