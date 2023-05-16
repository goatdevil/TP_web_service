import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ContactInfo.css';


export default function ContactInfo() {

    var url="https://random-data-api.com/api/v2/users";

  // useParams function from the react-router-dom library
  // can be used to retrieve parameters from the URL
  let { id } = useParams();

  // Definition of the state
  const [info, setInfo] = useState();

  // API calls is made as soon as the component is rendered
  // Get the details info of a selected contact by calling /contacts/id
  // The result should update the state (info)
  useEffect(() => {
      url=url+"?size=1";
      fetch(url)
            .then(data => data.json())
            .then(data => setInfo(data));
  }, [])

  // Need to check if the state info already fetched successfully the data or not
  // Info is initially equals to null, when the data is fetched info value will be updated
  // Since it's a state, when its value changes the JSX below will be re-rendered
  if (info) {
     return(
         <div >
             <h1 className={'INFO'}>INFO</h1>
             <div className="container">
            <img className='avatar' src={info.avatar} alt={'avatar'}/>
            <div className={'texte'}>
                <p className={'names'}>{info.first_name} {info.last_name}</p>
                <div className={'contact'}>
                    <p className={'element_contact'}>email : {info.email}</p>
                    <p className={'element_contact'}>tel : {info.phone_number}</p>
                    <p className={'element_contact'}>adresse : {info.address.city} {info.address.zip_code} {info.address.street_name} {info.address.street_address} </p>
                </div>
                <div className={'contact'}>
                    <p className={'element_contact'}>emploi : {info.employment.title} {info.employment.key_skill}</p>
                    <p className={'element_contact'}>CB : {info.credit_card.cc_number}</p>
                </div>
            </div>


        </div>
         </div>


  )
  }

  else {
    return <p>Data is being fetched...</p>
  }

}
