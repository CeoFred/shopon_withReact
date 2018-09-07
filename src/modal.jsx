import React,{Component} from 'react';
export default class ModalBox extends Component{
    render(){
        if(this.props.status){
            return <div className="modalComponnent fixed-top">
                    {this.props.ModalItems.map(item => <div>
                    <button onClick={this.props.ModalClose} className="btn btn-danger fixed-top-right close-btn">
                        X
                    </button>
                            <h5>ItemName: {item.name} </h5>
                            <br />
                    <h5>Item Price: NGN.{item.price}</h5>
                    <img src={item.img}/>

                        </div>)

                    }
                </div>;
        } else {
            return true
        }
    }
}

