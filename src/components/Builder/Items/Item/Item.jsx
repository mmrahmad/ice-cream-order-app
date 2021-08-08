import { countBy } from 'lodash';
import React from 'react';
import Classes from './Item.module.css';

function Item({name, add, remove, scoop = {}}) {
  const scoopsByCount = countBy(scoop);
    return (
        <li class={Classes.item}>
                    <span>{name}</span>
                    {scoopsByCount[name] >= 0 ? (<span className={Classes.quantity}>{scoopsByCount[name]}</span>) : null}
                    <div className='right'>
                      <button onClick={()=> add(name)} type="button" className={[Classes.plus, "rounded"].join(' ')}>+</button>
                      <button onClick={()=> remove(name)} type="button" className={[Classes.minus,"rounded"].join(' ')}>-</button>
                    </div>
        </li>
    )
}

export default Item
