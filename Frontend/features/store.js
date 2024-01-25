const { configureStore } = require("@reduxjs/toolkit");
const { default: ZameenFileSlice } = require("./slice");

const zameenFileStore = configureStore({
  reducer: {
    zameenFile: ZameenFileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default zameenFileStore;
