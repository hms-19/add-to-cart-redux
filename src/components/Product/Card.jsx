import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../redux/actions/cartActions'

const Card = ({products}) => {

const dispatch = useDispatch()

const handleAddToCart = (id) => {
    const product = products.filter(pd => pd.id == id)

    // console.log(product[0])
    dispatch(addToCartAction(product[0]))
}
  return (
        <>
        {
            products != [] ? 
            products.map(product => (
                <div key={product.id} className="p-4 shadow-md hover:shadow-lg">
                    <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                        <h2 className="text-gray-500">{product.description.substring(0,50)+'....'}</h2>
                        <p className="mt-1">${product.price}</p>
                        <button onClick={() => handleAddToCart(product.id)} className="p-2 bg-indigo-600 text-gray-100 my-2 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            
            ))
            : <></>
        }
        
        </>
  )
}

export default Card