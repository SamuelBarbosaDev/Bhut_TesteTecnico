import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useEffect, useState } from "react";
import api from '../../services/api';
import Link from 'react-router-dom';

import './index.css'


export default function MultiActionAreaCard() {

    const [carros, setCarros] = useState([]);
    
    useEffect(() =>{
        api.get('api/cars').then(({data}) => {
            setCarros(data);
        })
    },[]);
    
    const obj = Object.entries(carros);

  return (
    <div className='flex-container'>
        {obj?.map((carrosa, index) => 
        <div key={index} className='card'>
            <a href={`/details/${carrosa[1]['_id']}`}>
                <Card sx={{ minWidth: 370 }} >

                    <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/c7/b8/b4/c7b8b4b5627eaf239c4869ec8ffbb506.jpg"
                            alt={carrosa[1]['title']}
                            />
                    </CardActionArea>


                        <div className='informacao_do_card'>
                            <Typography gutterBottom variant="h5" component="div">
                                {carrosa[1]['title']} 
                            </Typography>
                        
                            <Button size="small" color="primary">
                                R${carrosa[1]['price']}
                            </Button>
                        </div>


                </Card>
            </a>
        </div>
        )}
    </div>

  );
}
