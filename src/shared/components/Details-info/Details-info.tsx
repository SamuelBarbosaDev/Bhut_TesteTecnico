import './index.css'
import api from '../../services/api';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function DetailsInfo() {

    const { id }= useParams()

    const [carros, setCarros] = useState([]);
    
    useEffect(() =>{
        api.get(`api/cars/${id}`).then(({data}) => {
            setCarros(data);
        })
    },[id]);
    
    const obj = Object.entries(carros);

  return (
    <div className='flex-container'>
        {obj?.map((carro, index) => 
            <div className='child'>
                <h2> </h2>
                <Box sx={{ minWidth: 375 }}>
                    <React.Fragment>
                        <CardContent>
                            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                            {carro[0]} :
                            </Typography>
                            <Typography variant="h5" component="div">
                            {carro[1]}
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                </Box>
            </div>
        )}
    </div>

  );
}