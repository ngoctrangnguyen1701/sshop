import { createReducer } from "@reduxjs/toolkit";
import { KEY_STORAGE } from "../../../common/constant";

//giá trị ban đầu initialState là mảng rỗng
export const dataRedux = createReducer([], {
  [KEY_STORAGE.SET_DATA](state, action) {
    return action.payload;
  }
})

export const shopList = createReducer([], {
  [KEY_STORAGE.GET_SHOP](state, action){
    return action.payload
  }
})