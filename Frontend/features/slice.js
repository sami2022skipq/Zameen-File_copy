const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  isLoggedIn: false,
};

const ZameenFileSlice = createSlice({
  name: "zameenFile",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    resetUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const ZameenFileActions = ZameenFileSlice.actions;
export default ZameenFileSlice;
