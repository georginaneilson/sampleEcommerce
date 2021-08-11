import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {
  basketMap: new Map(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      const basketMap = new Map(state.basketMap.entries());
      if (basketMap.get(action.payload.id)) {
        basketMap.set(action.payload.id, {
          ...{ count: basketMap.get(action.payload.id).count + 1 },
          ...action.payload,
        });
      } else if (action.payload && action.payload.id) {
        basketMap.set(action.payload.id, {
          ...{ count: 1 },
          ...action.payload,
        });
      }
      return {
        ...state,
        basketMap,
      };
    }
    case "UPDATECART": {
      const basketMap = new Map(state.basketMap.entries());
      if (basketMap.get(action.payload.id)) {
        if (action.payload.count < 1) {
          basketMap.delete(action.payload.id);
        } else {
          let x = basketMap.get(action.payload.id);
          x.count = x.count + action.payload.count;

          basketMap.set(action.payload.id, {
            ...basketMap.get(action.payload.id),
            ...action.payload,
          });
        }
      } else if (action.payload && action.payload.id) {
        console.error("error: no item with id");
      }
      return {
        ...state,
        basketMap,
      };
    }
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
