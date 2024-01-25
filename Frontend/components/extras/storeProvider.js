'use client';
import zameenFileStore from "@/features/store";
import { Provider } from "react-redux";

function StoreProvider({ children }) {
  return <Provider store={zameenFileStore}>{children}</Provider>;
}

export default StoreProvider;
