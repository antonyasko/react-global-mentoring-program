import React, { useContext } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { Modal } from '../../components/Modal/Modal';

import ModalContext from '../../store/modalContext';

function HomePage(): JSX.Element {
  const { isOpen, content } = useContext(ModalContext);
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {isOpen && <Modal>{content}</Modal>}
    </>
  );
}

export default HomePage;
