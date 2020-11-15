import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme/theme';
import {GlobalStyles} from './global-styles/GlobalStyles';
import {ContainerStyled} from './components/container/ContainerStyled';
import { FlexContainer } from './components/flex/FlexStyled';
import {Button} from './components/button/Button';
import {Heading} from './components/heading/Heading';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <FlexContainer>
        <ContainerStyled>
          <Heading
            light
            h3
            center
          >Components Library</Heading>
          <Button
            secondary
            hoverShadow
            round
          >What up Test!</Button>
        </ContainerStyled>
      </FlexContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
