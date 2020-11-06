import React from 'react';

export default class PayTypeSelector extends React.Component{
    onPayTypeSelected(event){
        console.log(event.target.value);
    }
    render(){
        return(
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
                        <option value='Purchase Online'>Purchase Online</option>
                    </select>
            </div>
        );
    }
}