import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../api'
import { setProduct } from '../../redux/actions/productActions'
import Card from './Card'

const Product = () => {

    const dispatch = useDispatch()

    //fetch products

    const fetchProducts = async () => {
            let res = await api.get('/products')
                            .catch(error => console.log(error))

            dispatch(setProduct(res.data))
    }

    useEffect(() => {
        fetchProducts()
    },[])

    const products = useSelector(state => state.allProducts.products)
    // console.log(products)

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <Card products={products} />    
            </div>
        </div>
    </section>
  )
}

export default Product