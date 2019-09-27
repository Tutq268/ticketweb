import React from 'react'

const ItemListOrder = ({page,index,orderInfo}) => {
    return(
        <tr>
        <td>{ (page > 0) ? ((10*(page-1) + index) + 1) : (index + 1)}</td>
        <td>{orderInfo.user.username}</td>
        <td>{orderInfo.user.address}</td>
        <td>{orderInfo.user.phone}</td>
        <td>{orderInfo.codeorder}</td>
        <td>{orderInfo.user.productPrice}</td>
        <td>{orderInfo.user.productType}</td>
        <td>{orderInfo.status}</td>
      </tr>  
    )
}
export default ItemListOrder