'use strict';
console.log('postsCreateFilter.js');

const postsData = [
  {
    title: 'HTML',
    author: 'James B.',
    year: 2022,
  },
  {
    title: 'CSS',
    author: 'Mike T.',
    year: 2012,
  },
  {
    title: 'JS',
    author: 'Jane D.',
    year: 2020,
  },
  {
    title: 'HTMLas',
    author: 'James B.',
    year: 2022,
  },
  {
    title: 'CSS',
    author: 'Mike T.',
    year: 2012,
  },
  {
    title: 'JS',
    author: 'Jane D.',
    year: 2020,
  },
];
// taikomes
const list1El = document.getElementById('list1');
const filterBtnEl = document.getElementById('filterBtn');
const filterInputEl = document.getElementById('filter');

const render = (arrOfPosts) => {
  // issivalyti generuojama konteineri
  list1El.innerHTML = '';
  console.log('render');
  arrOfPosts.forEach((pObj) => {
    // sukuriu elementa
    const newPostEl = createPostLi(pObj);
    // patalpinu elementa dom
    list1El.append(newPostEl);
  });
};

const createPostLi = (postObj) => {
  const liEl = document.createElement('li');
  liEl.className = 'card';
  liEl.innerHTML = `
  <h3>${postObj.title}</h3>
  <h4>${postObj.author}</h4>
  <p><i>${postObj.year}</i></p>
  `;
  return liEl;
};
// const crEl = createPostLi(postsData[2]);
// console.log('crEl ===', crEl);
// list1El.append(crEl);
const filterPosts = () => {
  // 1. pasiimti reiksme is input
  let inputValue = filterInputEl.value;
  // 2. su reiksme filtruojam postsData pagal title (.includes)
  let filteredData = postsData.filter((pObj) =>
    pObj.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log('filteredData ===', filteredData);
  // 3. is isfiltruoto masyvo generuojam postus su render()
  render(filteredData);
  // turi vykti funkcijoje kuria iskviesim mygtuko filter paspaudimu
};

render(postsData);

filterBtnEl.addEventListener('click', filterPosts);

filterInputEl.addEventListener('input', filterPosts);
