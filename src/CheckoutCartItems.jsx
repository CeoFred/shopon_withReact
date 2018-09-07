import React,{Component} from 'react';

export default class CheckoutCartItems extends Component{
render(){
    if(this.props.CheckCheckOutState){
 return <div align="center">
 <h3>Cart Item Final Checkout</h3>
<br/>
         {this.props.cartFinaLlist.map(item => (

             <table className="table table-bordered table-responsive">
                 <thead>
                     <tr>
                         <th>Image</th>
                         <th>Item</th>
                         <th>Price</th>
                         <th>Quantitiy</th>
                         <th>Total Price</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>

                         <th><img src={item.img} /> </th>

                         <th>{item.name}</th>

                         <th>NGN.{item.price}</th>

                         <th>{item.quantity}</th>

                         <th>NGN.{item.total}</th>
                     </tr>
                 </tbody>
             </table>
         ))}
     </div>;
    }else{
 return(
        <div>
Waiting For Checkout
            </div>
    )
    }

}
}
