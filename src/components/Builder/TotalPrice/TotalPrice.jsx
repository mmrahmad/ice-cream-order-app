import React from 'react'
import Classes from './TotalPrice.module.css'

function TotalPrice({price = 0}) {
    return (
        <div className={Classes.total}>
                <div>Total Price</div>
                <div>{price.toFixed(2)} Tk</div>
              </div>
    )
}

export default TotalPrice
