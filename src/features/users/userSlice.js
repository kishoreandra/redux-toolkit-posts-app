import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {userId : "1", name: "Kishore"},
    {userId : "2", name: "Rohith"},
    {userId : "3", name: "Sai"},
    {userId : "4", name: "Dikshith"}
]
const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{}
})

export default userSlice.reducer;

