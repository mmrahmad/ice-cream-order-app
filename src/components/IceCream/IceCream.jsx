import React from "react";
import Classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({scoops}) => {
    return (
        <div>
            <div className={Classes.icecream}>
              <p className={Classes.cone} />
              {/* <!-- <p>Please start adding scoops</p> --> */}
              {scoops.map((scoop) => (
              <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />))}
              <div className={Classes.cherry}></div>
            </div>
          </div>
    )
}
export default IceCream;