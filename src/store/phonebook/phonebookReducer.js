import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './initialState'


const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState, 
    reducers: {
        addContactsReducer: (state, { payload }) => {
            state.contacts.push(payload)
        },

        deleteContactsReducer: (state, { payload }) => {
            const filterList = state.contacts.filter(({id}) => id !== payload)
            state.contacts = [...filterList]
        },

        addFilterReducer: (state, {payload}) => {
            state.filter = payload
        }
    }
})

export const phonebookReducer = phonebookSlice.reducer
export const {addContactsReducer, deleteContactsReducer, addFilterReducer} = phonebookSlice.actions
