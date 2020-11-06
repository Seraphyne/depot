import React from 'react';
import NoPayType from './NoPayType';
import CreditCardPayType from './CreditCardPayType';
import CheckPayType from './CheckPayType';
import PurchaseOrderPayType from './PurchaseOrderPayType';

export default class PayTypeSelector extends React.Component{
    constructor(props){
        super(props);
        this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
        this.state = {
            selectedPayType: null,
        }
    }
    onPayTypeSelected(event){
        this.setState({ selectedPayType: event.target.value});
    }
    render(){

        let PayTypeCustomerComponent = NoPayType;

        if(this.state.selectedPayType == 'Credit Card'){
            PayTypeCustomerComponent = CreditCardPayType;
        }
        else if(this.state.selectedPayType == 'Check'){
            PayTypeCustomerComponent = CheckPayType;
        }
        else if(this.state.selectedPayType == 'Purchase Order'){
            PayTypeCustomerComponent = PurchaseOrderPayType;
        }

        return(
            <div>
                <div className="field">
                    <label htmlFor='order_pay_type'>Pay Type</label>
                        <select 
                            id='order_pay_type'
                            onChange={this.onPayTypeSelected} 
                            name='order[pay_type]'
                        >
                            <option value=''>Select a payment method</option>
                            <option value='Check'>Check</option>
                            <option value='Credit Card'>Credit Card</option>
                            <option value='Purchase Order'>Purchase Order</option>
                        </select>
                </div>
                <PayTypeCustomerComponent />
            </div>
        );
    }
}