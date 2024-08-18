import React, { useState } from 'react';
import './Bmi.css'

function Bmi() {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')

    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if (weight === 0 || height === 0) {
            alert('Please enter a valid values')
        } else {
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))

            //Logic for message
            if (bmi < 25) {
                setMessage('You are underweight')
            } else if (bmi >= 25 && bmi <= 30) {
                setMessage('You are healthy weight')
            } else {
                setMessage('You are overweight')
            }
        }
    }

//record clearing
    let reload = () => {
        window.location.reload()
    }
    return (

        <div className="bmi">
            <div className="container">
                <h2 className="center">MyBMI Calculator</h2>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight (lbs)</label>
                        <input value={weight} onChange={(event) => setWeight(event.target.value)} />
                    </div>
                    <div>
                        <label>Height (in)</label>
                        <input value={height} onChange={(event) => setHeight(event.target.value)} />
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                        <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>

                    </div>
                </form>

                <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>

            </div>

        </div>


    );


}
export default Bmi;