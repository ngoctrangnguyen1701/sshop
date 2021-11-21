import axios from 'axios'
import { IShop } from '../interface'

const listShop: IShop[] = [
  {
    id: '1',
    name: 'Shoe Shop',
    avatar: '/images/avatars/avatar_1.jpg',
    coverImage: '/images/products/product_1.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '2',
    name: 'Shoe Shop 2',
    avatar: '/images/avatars/avatar_2.jpg',
    coverImage: '/images/products/product_2.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '3',
    name: 'Shoe Shop 3',
    avatar: '/images/avatars/avatar_3.jpg',
    coverImage: '/images/products/product_3.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '4',
    name: 'Shoe Shop 4',
    avatar: '/images/avatars/avatar_4.jpg',
    coverImage: '/images/products/product_4.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '5',
    name: 'Shoe Shop 5',
    avatar: '/images/avatars/avatar_5.jpg',
    coverImage: '/images/products/product_5.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '6',
    name: 'Shoe Shop 6',
    avatar: '/images/avatars/avatar_6.jpg',
    coverImage: '/images/products/product_6.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '7',
    name: 'Shoe Shop 7',
    avatar: '/images/avatars/avatar_7.jpg',
    coverImage: '/images/products/product_7.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
  {
    id: '8',
    name: 'Shoe Shop 8',
    avatar: '/images/avatars/avatar_8.jpg',
    coverImage: '/images/products/product_8.jpg',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    registerDate: '01-01-2021',
    onlineTime: 8
  },
]

type CreateShopType = {
  name: string,
  description: string,
  registerDate: string
}

export async function getShop() {
  //chưa gọi api
  const response = listShop
  return response
}

export async function getPath() {
  return listShop.map(shop => shop.id)
  //trả về 1 mảng chứa các id
}

export async function getShopDetail(id: string) {
  const result = listShop.find(shop => shop.id === id)
  //trả về cái shop chứa id trùng với tham số id truyền vào
  return result
}

export async function createShop(payload: CreateShopType) {
  axios.post('http://45.77.244.252:3041/api/shop', payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}