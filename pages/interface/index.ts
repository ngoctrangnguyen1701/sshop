//thêm interface user, product
export interface IUser{
    id: string
    username: string
    password: string
    avatar: string
    createdDate: number
    ownShop: IShop[]
    money: number
    getWithdraw(amount: number) : void
}

class User implements IUser{
    private _password: string
    constructor(
        public id: string,
        public username: string,
        public password: string,
        public avatar: string,
        public createdDate: number,
        public ownShop: IShop[],
        public money: number,
    ){this._password = password}
    getWithdraw = (amount: number) =>{
        console.log(amount)
        this.money = this.money - amount
        //khi mà rút tiền thì trừ đi số tiền đã rút
        // do something
    }
}

export interface IProduct{
    id: string
    nane: string
    price: number
    image: string
    details: string
    //sold: number //số lượng sản phẩm đã bán
    getRating: (ratings: number[]) => number
    getReview: (review: string[]) => string[]
    getSold: () => void
}

class Product implements IProduct{
    sold: number = 0
    constructor(
        public id: string,
        public nane: string,
        public price: number,
        public image: string,
        public details: string,
    ){}
    getRating(ratings: number[]) {
        const sum: number = ratings.reduce((total = 0, rating) => total + rating)
        const result: number = Math.ceil(sum / ratings.length)
        return result
    }
    getReview(review: string[]){
        return review
    }
    getSold = () => {
        this.sold = this.sold + 1
    }
}

export interface IShop{
    id: string
    name: string
    avatar: string
    coverImage: string
    //products: IProduct[]
    description: string
    registerDate: string
    onlineTime: number
    /* owner: IUser
    getRating: (ratings: number[]) => number
    getReview: (review: string[]) => string[]
    getSell: (idProduct: string[]) => string[] //mở bán sản phẩm nào
    getSale: (idProduct: string[]) => string[] // giảm giá sản phẩm nào
    getSold: () => void //số lượng sản phẩm đã bán của shop
    addProduct: (product: IProduct[]) => IProduct[]
    deleteProduct: (idProduct: string[]) => string[]
    editProduct: (product: IProduct[]) => IProduct[] */
}



class Shop implements IShop{
    sold: number = 0
    constructor(
        public id: string,
        public name: string,
        public avatar: string,
        public coverImage: string,
        public description: string,
        public products: IProduct[],
        public registerDate: string,
        public onlineTime: number,
        public owner: IUser,
    ){}
    getRating(ratings: number[]) {
        const sum: number = ratings.reduce((total = 0, rating) => total + rating)
        const result: number = Math.ceil(sum / ratings.length)
        return result
    }
    getReview(review: string[]){
        return review
    }
    getSell(idProduct: string[]){
        return idProduct
    }
    getSale(idProduct: string[]){
        return idProduct
    }
    getSold = () =>{
        this.sold = this.sold + 1
    }
    addProduct(product: IProduct[]){
        return product
    }
    deleteProduct(idProduct: string[]){
        return idProduct
    }
    editProduct(product: IProduct[]){
        return product
    }
}

class ShopMall extends Shop{
    type: string = 'Mall'
}


class ShopFood extends Shop{
    type: string = 'Food'
}