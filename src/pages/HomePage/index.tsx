import React from 'react';
import { Card, Typography } from '@material-ui/core';
import TemporaryDrawer from '../../components/SideBar';
import UsersList from '../../components/UsersList';
import { DivHome } from './styles';

const HomePage = () => (
  <DivHome>
    <Card
      style={{
        backgroundColor: '#01001a',
        color: 'white',
        textAlign: 'left',
        padding: '2%',
      }}
    >
      <Typography variant="subtitle1">
        O verdadeiro poder está em sua equipe
      </Typography>

      <Typography variant="h6" style={{ fontWeight: 600 }}>
        Gerencie seus funcionários, especialmente os atendentes
      </Typography>
    </Card>

    <TemporaryDrawer />

    <UsersList />
  </DivHome>
);

export default HomePage;
