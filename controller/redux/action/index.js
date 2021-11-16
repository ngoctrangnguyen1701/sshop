import { createAction } from "@reduxjs/toolkit";
import { KEY_STORAGE } from '../../../common/constant';

//tạo 1 action đương tương với bên redux là {type: ... , payload: ...}
export const setDataRedux = createAction(KEY_STORAGE.SET_DATA)
export const getShopRedux = createAction(KEY_STORAGE.GET_SHOP)
