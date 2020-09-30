import React, { useState, useEffect } from "react";
import Button from "../ModalButton";
import { Container, useModal } from "../DefaultModals";
import './style.scss';

const ExampleModal = ({isModalOpen, setModalIsOpen}) => {
  console.log(isModalOpen)
  const { on, hide, getContainerProps, getToggleProps, show } = useModal();
  // Оба значения - стейт для модалки с экрана где будет модалка
// isModalOpen = строка, для того что бы подтянуть нужное значение в форму через запрос, или булевое значение что бы создать новое что-то;
  //setModalIsOpen функция которой нужно передать значение закрывающее модалку
  useEffect(()=>{
    if (isModalOpen){
      (()=>{
        show()
      })()
    }
  }, [isModalOpen])

  useEffect(() => {
    if(typeof isModalOpen === 'string') {
      (async () => {
      })()
    }
  }, [isModalOpen])

return (
    <>
      {/*{todo если хочешь модалку с кнопкой то как то так, если нет то через стейт экрана из вне}*/}
    {/*<Button {...getToggleProps()}>Завершить урок</Button>*/}
      {on &&(
        <Container {...getContainerProps()} onClick={()=>{hide(); setModalIsOpen(false);}}>
          <div className='lesson-modal'>
            Текст модалки
          </div>
        </Container>
      )}
    </>
  );
};

export default ExampleModal;
