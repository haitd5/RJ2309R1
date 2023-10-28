import React, {useEffect, useState} from "react";

function Selector(){

    const [selector, setSelector] = useState('')
    const [valueStated, setValueStated] = useState('')


    const handleChangeValue = (e) =>{
        setSelector(e.target.value)
    }

    useEffect(()=>{
        switch (selector) {
            case '0':
                setValueStated('Java');
                break;
            case '1':
                setValueStated('Angular');
                break;
            case '2':
                setValueStated('Javascript');
                break;
            case '3':
                setValueStated('Php');
                break;
            default:
                setValueStated('Please selector ')
        }
    },[])
    return(
        <div>
            <h2>Your selector: {valueStated}</h2>
            <select className='form-select w-50 my-2' onChange={handleChangeValue}>
                <option selected>Open this selector menu</option>
                <option value='0'>Java</option>
                <option value='1'>Angular</option>
                <option value='2'>Javascript</option>
                <option value='3'>Php</option>
            </select>
        </div>
    )
}
export default Selector;