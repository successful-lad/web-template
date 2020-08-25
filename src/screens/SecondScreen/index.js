import React from 'react';
import './style.scss';
// import React, {useEffect, useState} from 'react';
/** api method**/
// import {getAllTourList} from '../../apiMethods'

const SecondScreen = () => {
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
    <div>Second Screen </div>
  )
};

export default SecondScreen;
