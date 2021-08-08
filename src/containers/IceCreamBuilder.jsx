import React, { Component } from 'react'
import Builder from '../components/Builder/Builder'
import IceCream from '../components/IceCream/IceCream'
import Classes from './IceCreamBuilder.module.css'

export default class IceCreamBuilder extends Component {
    state= {
        items : {}, 
        scoops : [],
        totalPrice: 0,
    }
    componentDidMount(){
        fetch('https://icecream-4a609-default-rtdb.firebaseio.com/Items.json').then((response)  => response.json()).then((responseData) => {
           this.setState({
                items : responseData,
           })
        });
    }
    addScoop = (scoop) => {
        const {scoops, items} = this.state;
        const workingScoop = [...scoops];
        workingScoop.push(scoop);
        this.setState((prevState)=>{
            return{
                scoops: workingScoop,
                totalPrice: prevState.totalPrice + items[scoop],
            }
        });
    }
    removeScoop = (scoop) => {
        const {scoops, items} = this.state;
        const workingScoop = [...scoops];
        const scoopIndex = workingScoop.findIndex((sc) => sc === scoop);
        workingScoop.splice(scoopIndex, 1);
        this.setState((prevState)=>{
            return{
                scoops: workingScoop,
                totalPrice: prevState.totalPrice - items[scoop],
            }
        });
    }


    render() {
        const {items, totalPrice, scoops} = this.state;
        return (
            <div className={[Classes.container, 'container'].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoop={scoops} />
            </div>
        )
    }
}
