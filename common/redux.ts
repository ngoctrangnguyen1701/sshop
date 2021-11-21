import { setDataRedux, getShopRedux } from "../controller/redux/action";
import { store } from "../controller/redux/store/configureStore";
import { getShop } from "../pages/api";

export const intervalRedux = ()=>{
  setInterval(() =>{
    const number = Math.random()
    store.dispatch(setDataRedux(number))
  })
}

export const refreshDataGlobal = async () =>{
  console.log('refreshDataGlobal');
  
  const data = await getShop()
  store.dispatch(getShopRedux(data))
}