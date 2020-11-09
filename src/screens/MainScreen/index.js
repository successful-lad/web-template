import React from 'react';
import './style.scss';
import { history } from "../../appConfig";
import routes from "../../consts/routes";
import { useCardData, useExampleData } from '../../hooks';
// import React, {useEffect, useState} from 'react';
/** api method**/
// import {getAllTourList} from '../../apiMethods'

const MainScreen = () => {

  // const { addNewCard, cards } = useCardData();
  const {onGet, onClear, data} = useExampleData();
  console.log(data)
  // const [ allTour, setAllTour ] = useState([]);
/**
 *load data during component initialization by loading it all from the server
**/
  // useEffect(() => {
  //   (async () => {
  //     const res = await getAllTourList();
  //     setAllTour(res.tours)
  //   })()
  // }, []);
  return (
    <>
      {/*{cards?.map((item, index) =>(*/}

      {/*  <div key={index}>*/}
      {/*    <div>{item.cardName}</div>*/}
      {/*    <div>{item.balance}</div>*/}
      {/*  </div>*/}
      {/*    )*/}
      {/*)}*/}
      {/*<button*/}
      {/*  onClick={() =>{addNewCard({cardName: 'adadas', balance: 131232})}}*/}
      {/*>first</button>*/}
      <button
        onClick={() =>{onGet('successful-lad')}}
      >second</button>
      <div className='mainScreen'>Main Screen</div>
      <button onClick={() =>history.push(routes.getSecondScreen())}> перейти на другой экран</button>
    </>
  )
};

export default MainScreen;
