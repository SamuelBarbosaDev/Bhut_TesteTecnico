import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

import { useEffect, useState } from "react";
import api from '../../services/api';

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
        {obj?.map((carro, index) => 
        <div key={index} className='card'>
            <a href={`/details/${carro[1]['_id']}`}>
                <Card sx={{ minWidth: 370 }} >

                    <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/c7/b8/b4/c7b8b4b5627eaf239c4869ec8ffbb506.jpg"
                            alt={carro[1]['title']}
                            />
                    </CardActionArea>


                        <div className='informacao_do_card'>
                            <Typography gutterBottom variant="h5" component="div">
                                {carro[1]['title']} 
                            </Typography>
                        
                            <Button size="small" color="primary">
                                R${carro[1]['price']}
                            </Button>
                        </div>


                </Card>
            </a>
        </div>
        )}
    </div>

  );
}
