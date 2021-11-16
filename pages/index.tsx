import type { NextPage } from 'next'
/* import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' */
import {
  Container,
  Grid
} from '@mui/material'
import ShopItem from './components/ShopItem'
import { getShop } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { getShopRedux, setDataRedux } from '../controller/redux/action'
//import { createSelector } from 'reselect'
import { createSelector } from '@reduxjs/toolkit'

const Home: NextPage = (props) => {
  const dispatch = useDispatch()
  const dataRedux = useSelector((state: any) => state.dataRedux)
  console.log(dataRedux);

  //const { shopList } = useSelector((state: any) => state)
  //console.log('shopList: ', shopList);
  
  //↑ vấn đề của redux, biến 'dataRedux' thay đổi 
  //thì sẽ render lại những component nào sử dụng các thuộc tính nó, 
  //kể cả những thuộc tính ko thay đổi bên trong dataRedux,
  //cải tiến của createSelector trong redux toolkit
  //là sẽ lọc lại component nào sử dụng thuộc tính có thay đổi thì mới render lại
  //chứ không phải chỉ cần sử dụng biến 'dataRedux' là component thay đổi

  //props.data chính là cái data trả về getStaticProps
  dispatch(setDataRedux(props.data))
  dispatch(getShopRedux(props.data))

  const connRedux = (state: any) => state.dataRedux
  const selectorRedux = createSelector(
    connRedux, (data) => { return { name: data[0].name } }
  )
  const selectorData = useSelector(state => selectorRedux(state))
  console.log(selectorData)
  //↑ vd sử dụng createSelector, lọc lại biến connRedux, lấy thuộc tính 'name'
  //chỉ khi nào thuộc tính 'name' thay đổi thì mới render lại component 


  //làm lại
  const getAvatar = createSelector(
    (state: any) => state.shopList,
    (shopList: any[]) => shopList.map(shop => shop.avatar)
    /* (shopList: any[]) => {
      console.log(shopList)
      return 'shopList'
    } */
  )
  const avatarArr = useSelector(state => getAvatar(state))
  console.log('avatarArr: ', avatarArr);
  


  const elementShop = props.data.map(ShopItem)
  //cách viết ngắn gọn cho cú pháp item => <ShopItem item={item}/>
  //console.log(props.data)
  
  return (
    <Container>
      <Grid container spacing={3}>
        {elementShop}
      </Grid>
    </Container>
  )
}

export default Home

export async function getStaticProps() {
  const data = await getShop()
  return {
    props: {
      data,
    }
  }
}