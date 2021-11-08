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

const Home: NextPage = (props) => {
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