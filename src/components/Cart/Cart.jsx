import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../../redux/actions/cartActions'
import { qtyDecreaseAction, qtyIncreaseAction } from '../../redux/actions/qtyActions'

const Cart = () => {
  const carts = useSelector(state => state.allCartList.cart)
  const dispatch = useDispatch()

  //remove from cart
  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id))
  }

  //increase Qty
  const increaseQty = (id) => {
    dispatch(qtyIncreaseAction(id))
  }

  //decrease Qty
  const decreaseQty = (id) => {
    dispatch(qtyDecreaseAction(id))
  }

  return (
    <div>
      
      <div className="overflow-x-auto relative container shadow-lg mx-auto p-12 mt-12">
          <h2 className="text-2xl text-bold text-gray-900 my-3">All Cart List</h2>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="py-3 px-6">
                          Product name
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        QTY
                      </th>
                      <th scope="col" className="py-3 px-6">
                        REMOVE
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    carts.map((cart,index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                              {cart.product.title}
                          </th>
                          <td className="py-4 px-6">
                            {cart.product.category}
                          </td>
                          <td className="py-4 px-6">
                            {cart.product.price}
                          </td>
                          <td className="py-4 px-6">
                            <div className='flex items-center'>
                              <div onClick={() => decreaseQty(cart.product.id)} className="text-lg bg-indigo-500 text-white p-2  cursor-pointer rounded-md">-</div>
                              <div className=' text-lg p-3'>{cart.qty}</div>
                              <div onClick={() => increaseQty(cart.product.id)} className="text-lg bg-indigo-500 text-white p-2 cursor-pointer rounded-md">+</div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div onClick={() => removeFromCart(cart.product.id)} className="text-2xl text-bold font-mono cursor-pointer text-red-500">X</div>
                          </td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>

    </div>
  )
}

export default Cart