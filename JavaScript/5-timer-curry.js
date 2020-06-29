'use strict';

const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args)
  );
  return par.length ? curried(...par) : curried;
};

const fn = () => {
  console.log('Callback from from timer');
  console.log(2);
};

const timeout = (interval, fn) => setTimeout(fn, interval);

const timer = curry(timeout);
timer(5000)(fn);

console.log(1);
const timer2s = timer(2000);
timer2s(fn);
