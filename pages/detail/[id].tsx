import type { NextPage } from 'next'
import { getShop, getShopDetail } from '../api'
import ShopItem from '../components/ShopItem'

const Detail: NextPage = (props) => {
  console.log(props.data)
  
  return (
    <div>
      <h1>Detail</h1>
      <ShopItem {...props.data}/>
    </div>
  )
}

export default Detail

export async function getStaticPaths() {
  const listShop = await getShop()
  const paths = listShop.map(shop => ({params: {id: shop.id}}))
  return {paths, fallback: false}
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