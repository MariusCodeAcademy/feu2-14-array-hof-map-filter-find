'use strict';
console.log('map.js');

// array.map(function(currentValue, index, arr) {})
// array.map((currentValue, index, arr) => {})

// Array.prototype.map - skirtas pakeisti strukturai, grazina nauja masyva, tokio pat ilgio su tiek pat nariu masyva.

const nums = [1, 2, 3];

const rez = nums.map((sk, i, arr) => {
  console.log(i, 'sk ===', sk);
  return sk;
});
console.log('rez ===', rez);
// gauti tokia strukrura const numsO = [{ id: 1 }, { id: 2 }, { id: 3 }];

const numsObjs = nums.map((sk) => {
  const newObjForArr = { id: sk };
  return newObjForArr;
});
console.log('numsObjs ===', numsObjs);

const numsLiArr = ['<li>1</li>', '<li>2</li>', '<li>3</li>'];
