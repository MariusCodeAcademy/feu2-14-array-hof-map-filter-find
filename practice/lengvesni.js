'use strict';
console.log('lengvesni.js');

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];
const colors = ['red', 'green', 'blue', 'tomato'];

// 3. is colors array grazinti nauja masyva su visu spalvu raidziu kiekiais

const colLettersCount = colors.map((colorStr) => colorStr.length);
console.log('colLettersCount ===', colLettersCount);
