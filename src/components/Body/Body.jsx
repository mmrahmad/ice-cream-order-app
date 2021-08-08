import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder';
import Classes from './Body.module.css';

const Body = () => {
    return(
        <div className={Classes.mainBody}>
            <IceCreamBuilder />
        </div>
    )
}

export default Body;