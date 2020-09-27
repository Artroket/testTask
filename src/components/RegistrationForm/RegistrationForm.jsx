import React, { useEffect } from 'react';
import * as axios from 'axios';
import s from './RegistrationForm.module.css'
import { useDispatch } from 'react-redux';
import { addClientAC } from '../../redux/clients-reducer';
import { changePath } from '../../redux/path-reducer';

const RegistrationForm = (props) => {
    const [api, setApi] = React.useState("none");
    const [loyalty, setLoyalty] = React.useState('none');
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [card, setCard] = React.useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePath(props.path));
    }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://meowfacts.herokuapp.com/`)
            setApi(response.data.data);
        }

        fetchData();
    }, []);

    const selectChange = (event) => {
        setLoyalty(event.target.value);
    }

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const surnameChange = (event) => {
        setSurname(event.target.value);
    }

    const genderChange = (event) => {
        setGender(event.target.value);
    }

    const cardChange = (event) => {
        setCard(event.target.value);
    }

    const addClient = () => {
        const data = loyalty === 'card'
            ? { name: name, surname: surname, gender: gender, loyalty: loyalty, card: card, registrationDate: '22.02.2003' }
            : { name: name, surname: surname, gender: gender, loyalty: loyalty, registrationDate: '22.02.2003' }

        dispatch(addClientAC(data));
    }


    return (
        <div className={s.all}>
            <form className={s.regForm} onSubmit={addClient}>
                <label className={s.title}>Add a new Client</label>
                <div className={s.nameInput}>
                    <label className={s.sectionTitle}>First Name</label>
                    <input className={s.inputText} onChange={nameChange} placeholder="First name" value={name} ></input>
                    <label className={s.sectionTitle}>Last Name</label>
                    <input className={s.inputText} onChange={surnameChange} placeholder="Last name" value={surname} ></input>
                </div>
                <div>
                    <label className={s.sectionTitle}>Gender</label>
                    <div className={s.radioContainer}>
                        <div className={s.radioItem}>
                            <input className={s.radio} onChange={genderChange} type="radio" id="contactChoice1" name="contact" value="Male" />
                            <label for="contactChoice1">Male</label>
                        </div>
                        <div className={s.radioItem}>
                            <input className={s.radio} onChange={genderChange} type="radio" id="contactChoice2" name="contact" value="Female" />
                            <label for="contactChoice2">Female</label>
                        </div>
                    </div>
                    <label className={s.sectionTitle}>Loyalty program</label>
                    <select value={loyalty} onChange={selectChange}>
                        <option value="none">Not Available</option>
                        <option value="mobile">Mobile app</option>
                        <option value="card">Card</option>
                    </select>
                    {loyalty === 'card'
                        ? <input className={s.inputText} onChange={cardChange} placeholder='Card Number' /> : null}
                    <div className={s.submitContainer}>
                        <input type="submit" value="Add Client" className={s.submit}></input>
                    </div>
                    <div className={s.TopMargin}>
                        <label className={s.sectionTitle}>Fact about cats 😸</label>
                        <p>
                            {api}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}



export default RegistrationForm;