import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const {dispatch} = useContext(AppContext);

	const changeCurrency = (val) =>{
		dispatch({
			type: 'CHG_CURRENCY',
			payload: val,
		})
	}
		return (       
                <div className='alert alert-secondary'>
                    <label style={{marginLeft: '1rem', backgroundColor:'#FFE0E3', color:'purple'}}> Currency
                    <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#FFE0E3', color:'purple'}}>
                        <option style={{color:'black'}} value='£'>£ Pound </option>
                        <option style={{color:'black'}} value='$'>$ Dollar </option>
                        <option style={{color:'black'}} value='€'>€ Euro </option>
                        <option style={{color:'black'}} value='₹'>₹ Ruppee </option>
                    </select>
                    </label>
                </div>
            
            
	);
};

export default Currency;