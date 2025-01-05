import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCourseFromServer = createAsyncThunk(
  "courses/getCourseFromServer",
  async (url) => {
    console.log("url => ", url);
    return fetch(url).then(res => res.json()).then(data => data)
  }
);

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers : builder =>{
    builder.addCase(getCourseFromServer.fulfilled , (state , action)=>{
        console.log(state)
        console.log(action)

        state.push(...action.payload.courses)

        console.log(state)

    })
  }
});

export default slice.reducer;
