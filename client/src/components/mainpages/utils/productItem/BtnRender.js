import React, {useContext} from 'react'
import {Link,Route} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
// import DetailProduct from '../../detailProduct/DetailProduct'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Buy
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </Link>
                </>
                
            }
             {/* <Route path="/detail/:id" exact component={DetailProduct} />     */}
        </div>
    )
}

export default BtnRender
