import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

interface FetchUserPayload {
    rowId: number; // Replace with the appropriate type for your row identifier
}

export const fetchUsers = createAsyncThunk(
    "users/getUser",
    async (payload: FetchUserPayload, thunkApi) => {
        const token = Cookies.get("email"); // Replace with your actual token

        const response = await fetch(
            `${process.env.API_URL}/` + "get-user-profile", // Update the API endpoint
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    email: token,
                    // Include any additional data needed for the POST request
                }),
            }
        );

        const data = await response.json();
        if (data?.data?.status !== 'active') {
            window.location.href = "/verify"
        }
        // console.log(data?.data)
        return data?.data;
    }
);

const initialState = {
    profileData: null, // Initialize entities as an empty array
    loading: false,
    value: 10,
} as any;

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // console.log('Data Fetched Successfully:', action.payload);
            state.loading = false;
            state.profileData = action.payload;
        });
        builder.addCase(fetchUsers.pending, (state) => {
            console.log('Fetching Data...');
            state.loading = true;
        });
    },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
