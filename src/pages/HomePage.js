import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Header from '../components/Header';
import Picture from '../components/Picture';

const HomePage = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
  `;

  const URL = 'https://apod.nasa.gov/apod/image/1707/Messier106_NGC4217Feltoti.jpg';

  return (
    <Wrapper>
      <Header />
      {[...Array(8).keys()].map(n => 
        <Picture
          key={n}
          path={URL}
          caption={{
            camera: 'Canon EOS 1300D',
            telescope: 'Skywatcher 150/750 EQ3',
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            title: 'A simple photo example'
          }}/>
      )}
    </Wrapper>
  );
};

export default HomePage;
