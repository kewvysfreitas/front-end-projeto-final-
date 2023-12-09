// src/components/PratoCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const PratoCard = ({ prato }) => {
    console.log('PratoCard renderizado:', prato);
      
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        alt={prato.nome}
        height="140"
        image={prato.fotoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prato.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prato.descricao}
        </Typography>
        <Typography variant="h6">Preço: R$ {prato.preco}</Typography>
      </CardContent>
    </Card>
  );
  
};

export default PratoCard;
