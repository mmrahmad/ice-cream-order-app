import React from 'react';
import Item from './Item/Item';


function Items({items, add, remove, scoop}) {
    const flavors = Object.keys(items);
    return (
        <div>
            <ul>
                {flavors.map((flavor)=>(<Item key={flavor} name={flavor} add={add} remove={remove} scoop={scoop} />))}
            </ul>
        </div>
    )
}

export default Items
