import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
            state.loading = false;
            state.error = null;
            return state
        },
        createUser: (state, action) => {
            state.users = action.payload
            state.loading = false;
            state.error = null;
            return state
        },
        editUser: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
            state.loading = false;
        state.error = null;

        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
          },
          setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }
    }
})

export const { setUsers, createUser, deleteUser, editUser,setLoading,setError } = UserSlice.actions