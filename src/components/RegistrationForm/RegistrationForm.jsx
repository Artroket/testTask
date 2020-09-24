import React from 'react';
import s from './RegistrationForm.module.css'

const RegistrationForm = (props) => {

    let state = props.clients;

    let newLoyalty = React.createRef();
    
    let selectChange = () => {
        let newProgram = newLoyalty.current.value;
        props.changeLoyalty(newProgram);
       
    }

    return (
        <div className={s.all}>
            <form className={s.regForm}>
                <div>
                    <label>Name</label>
                    <textarea placeholder='Name' ></textarea>
                    <textarea placeholder='Surname' ></textarea>
                </div>
                <div>
                    <label>Gender</label>
                    <div>
                        <label for="contactChoice1">Male</label>
                        <input type="radio" id="contactChoice1" name="contact" value="Male" />
                        <label for="contactChoice2">Female</label>
                        <input type="radio" id="contactChoice2" name="contact" value="Female" />
                    </div>
                    <div>
                        <select ref={newLoyalty} onChange={selectChange}>
                            <option selected>Not Available</option>
                            <option>Mobile app</option>
                            <option>Card</option>
                        </select>
                    </div>
                    <div>
                       {state.loyaltyProgram === 'Card' 
                       ? <textarea placeholder='Card Number' ></textarea> : <div></div>}
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}



export default RegistrationForm;