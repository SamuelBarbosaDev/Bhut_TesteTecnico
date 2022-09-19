import './index.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../shared/services/api';

export default function App() {

    const { id }= useParams()

    const [carros, setCarros] = useState({})

    
    useEffect(() =>{
        api.get(`api/cars/${id}`).then(({data}) => {
            setCarros(data);
        })
    },[id]);

    const obj = Object.entries(carros);
        
    return (
        <div className='flex-container'>
            {obj?.map((carrosa, index)=>
                <div className='card'>
                    <li>{carrosa[0]}</li>
                </div>
            )}
        </div>
    );
}

