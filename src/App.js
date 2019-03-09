import React from 'react'
import AppContainer from './components/app-container';
import ImageList from './components/image-list';
import ImageDisplyModal from './components/image-display-modal';
import Header from './components/header';
const App = ()=> {
  return (
    <AppContainer>
      <Header/>
      <ImageList/>
      <ImageDisplyModal/>
    </AppContainer>
  );
}

export default App;
