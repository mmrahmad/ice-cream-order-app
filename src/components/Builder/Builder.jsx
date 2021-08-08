import React from 'react'
import Modal from '../Modal/Modal'
import Classes from './Builder.module.css'
import Items from './Items/Items'
import TotalPrice from './TotalPrice/TotalPrice'

function Builder({items, price, add, remove, scoop}) {
    return (
        <div>
                <div className={Classes.builder}>
                    <h3>Build your own Ice Cream Sundae</h3>
                      <Items items={items} add={add} remove={remove} scoop={scoop} />
                      <TotalPrice price={price} />
                    <button type="button" className={[Classes.order, 'rounded'].join(' ')}>
                      Add to Cart
                    </button>
                </div>
                <Modal />
            </div>
    )
}

export default Builder
