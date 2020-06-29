'use strict';

// import { runInNewContext } from "vm";

const iterate = (array, listener) => {
  
  // =============== eternal function  ============================
  // let counter = 0;
  // setInterval(() => {
  //   listener(array[counter++]);
  //   if (counter >= array.length) counter = 0;
  // }, 1000);

  // ==============   setInterval  =================================
  let i = 0;
   let fn = setInterval(() => {
      listener(array[i++]);
      if (i == array.length ) clearInterval(fn);
    }, 1000);


  // ==============  setImmediate  ====================================
  // let i = 0;
  // for (const val of array){
  //   setImmediate(() => {
  //     listener(val);
  //   });
  // }

  // ============== setTimeout(fn, 0) =================================
  // let i = 0;
  // for (const val of array){
  //     setTimeout(() => {
  //       listener(val);
  //     }, 0);
  //   }

  // ==============  process.nextTick ==================================
  // let i = 0;
  // for (const val of array){
  //   process.nextTick(() => listener(val));
  // }

   
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = city => console.log('Next city:', city);

iterate(cities, print);
