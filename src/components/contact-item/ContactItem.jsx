import React from 'react'
import './contact-item.css';

// Reminder: Props in React can be seen parameters in regular JavaScript functions
// The data passed as props can be accessed in such a way:
// props.data1, props.data2, props.data3
export default function ContactItem(props) {
    
    return (
        // Write the HTML (jsx) code to display the information of one contact in the contact list
        <div className="container">
            <img className='avatar' src={props.contactData.avatar} alt={'avatar'}/>
            <div className={'texte'}>
                <p className={'names'}>{props.contactData.first_name} {props.contactData.last_name}</p>

            </div>


        </div>
    )
}
