import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Clothing from "./clothing";
const dummyList = [];
const dummyNav = [];
describe("Clothing Page", () => {
  const initialState = { basketMap: new Map() };
  const mockStore = configureStore();
  let store;
  it("Renders the expected elements", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Clothing productList={dummyList} navigation={dummyNav} />
      </Provider>
    );
    expect(screen.getByTestId("heading")).toBeInTheDocument();
  });
  //Todo: continue with more in depth testing
});
