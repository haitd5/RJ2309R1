import React, {useState} from "react";

function CarSelector() {
    const [state, setState] = useState({
        carName : '',
        carColor: ''
    })
    const handleCarName = (e) => {
        setState({
            ...state,
            carName: e.target.value
        })
    }
    const handleCarColor = (e) => {
        setState({
            ...state,
            carColor: e.target.value
        })
    }
    return (
        <>
            <h1>Select your card</h1>
            <p>Select a car </p>
            <select className='form-select w-50 my-2' onChange={handleCarName}>
                <option value='' selected>Open this selector car</option>
                <option value='Mercedes'>Mercedes</option>
                <option value='Lexus'>Lexus</option>
                <option value='Honda'>Honda</option>
                <option value='Suzuki'>Suzuki</option>

            </select>
            <p>Select a color </p>
            <select className='form-select w-50 my-2' onChange={handleCarColor}>
                <option value='' selected>Open this selector color</option>
                <option value='Red'>Red</option>
                <option value='Black'>Black</option>
                <option value='Green'>Green</option>
                <option value='Blue'>Blue</option>

            </select>

            <p>You selected a: {state.carName}  {state.carColor}</p>

        </>
    )
}
export default CarSelector