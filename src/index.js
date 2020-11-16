import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme/theme';
import {GlobalStyles} from './global-styles/GlobalStyles';
import {Container} from './components/container/Container';
import { FlexContainer, FlexItem,FlexColumn } from './components/flex/FlexStyled';
import {Button} from './components/button/Button';
import {Heading} from './components/heading/Heading';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <Heading h2>Components Library</Heading>
      <FlexContainer column>
        <FlexColumn justifyEnd>Hello</FlexColumn>
        <FlexColumn justifyCenter>Hey</FlexColumn>
        <FlexColumn>Hi</FlexColumn>
        <FlexColumn justifyCenter>What up</FlexColumn>
      </FlexContainer>
      <Button round>Testing this button</Button>
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
