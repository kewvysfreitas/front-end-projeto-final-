import React, { useState, useEffect } from 'react';
import PratoCard from './components/PratoCard';
import { Container, Grid, Card, CardContent, Fade } from '@mui/material';

const Home = () => {
  const [pratos, setPratos] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8082/api/pratos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setPratos(data))
      .catch((error) => console.error('Erro ao obter pratos:', error));
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Cardápio</h1>
      <Grid container spacing={2}>
        {pratos.map((prato) => (
          <Grid item key={prato.id} xs={12} sm={6} md={4}>
            <Card
              onMouseEnter={() => setHoveredCard(prato.id)}
              onMouseLeave={() => setHoveredCard(null)}
              elevation={hoveredCard === prato.id ? 6 : 2}
            >
              <CardContent>
                <Fade in timeout={800}>
                  <div>
                    <PratoCard prato={prato} />
                  </div>
                </Fade>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
