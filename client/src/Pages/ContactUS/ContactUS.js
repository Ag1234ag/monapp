import React from 'react';
import './ContactUS.css';
import map from '../../assets/map.png';
import phone from '../../assets/phoneeee.png';
const ContactUS = () => {
  return <div>
    <div className="back">
        <br />
        <br />
        <br />
    <div className="contact">
    <img
               alt="map"
               src={map}
             />
      <h2 className='attr'> Address : </h2>
     
        </div>
        <h2 className='para'>  Street Khalid Ibn Walid L'aouina 2045 </h2>
        <div className="contactt">
      <img
               alt="phone"
               src={phone}
             />
            
      <h2 className='attr'>Phone: </h2> 
      <h2 className='para'>(+)21696312451</h2>
     </div>
</div>
  </div>;
};

export default ContactUS;
