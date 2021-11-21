import type { NextPage } from 'next'
import { useContext } from 'react'
import { getShop, getShopDetail } from '../api'
import {
  Container
} from '@mui/material'
import { ColorThemeContext } from '../contexts/ColorThemeContext'
import ShopItem from '../components/ShopItem'
import Header from '../components/Header'

const Detail: NextPage = (props) => {
  console.log(props.data)
  const { colorTheme } = useContext(ColorThemeContext)


  return (
    <div style={{backgroundColor: colorTheme.backgroundColorContent}}>
      <Header/>
      <Container>
        <h1>Detail</h1>
        <ShopItem {...props.data}/>
      </Container>
    </div>
  )
}

export default Detail

export async function getStaticPaths() {
  const listShop = await getShop()
  const paths = listShop.map(shop => ({params: {id: shop.id}}))
  console.log(paths);
  
  return {paths, fallback: false}
  //trả về mảng chứa các params id để thằng getStaticProps có thể load trước dữ liệu
  //từ cái params id
}

export async function getStaticProps(context: any) {
  //context ở đây là dữ liệu lấy từ trên thanh url(trong đó có thuộc tính param)
  const data = await getShopDetail(context.params.id)
  return {
    props: {
      data
    }
  }
}