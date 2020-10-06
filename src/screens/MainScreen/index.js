import React from 'react';
import './style.scss';
import { history } from "../../appConfig";
import routes from "../../consts/routes";
 
// import React, {useEffect, useState} from 'react';
/** api method**/
// import {getAllTourList} from '../../apiMethods'

const MainScreen = () => {
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
      <div className='mainScreen'>Main Screen</div>
      <button onClick={() =>history.push(routes.getSecondScreen())}> перейти на другой экран</button>
    </>
  )
};

export default MainScreen;
