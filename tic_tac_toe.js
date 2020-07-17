// Restart game button
var restart = document.querySelector('#b');
// grabs all the squares
var squares = document.querySelectorAll('td');
// clear all the squares
function clearBoard()
{
  for (var i = 0; i < squares.length; i++)
   {
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clearBoard);


// check the square marker
var cellOne =  document.querySelector('#one')
cellOne.addEventListener('click',function(){
if (cellOne.textContent === ''){
  cellOne.textContent = 'x';
}else if (cellOne.textContent === 'x') {
  cellOne.textContent = 'o';
}else {
  cellOne.textContent = '';
}
})

var cellTwo =  document.querySelector('#two')
cellTwo.addEventListener('click',function(){
if (cellTwo.textContent === ''){
  cellTwo.textContent = 'x';
}else if (cellTwo.textContent === 'x') {
  cellTwo.textContent = 'o';
}else {
  cellTwo.textContent = '';
}
})

var cellThree =  document.querySelector('#three')
cellThree.addEventListener('click',function(){
if (cellThree.textContent === ''){
  cellThree.textContent = 'x';
}else if (cellThree.textContent === 'x') {
  cellThree.textContent = 'o';
}else {
  cellThree.textContent = '';
}
})

var cellFour =  document.querySelector('#four')
cellFour.addEventListener('click',function(){
if (cellFour.textContent === ''){
  cellFour.textContent = 'x';
}else if (cellFour.textContent === 'x') {
  cellFour.textContent = 'o';
}else {
  cellFour.textContent = '';
}
})

var cellFive =  document.querySelector('#five')
cellFive.addEventListener('click',function(){
if (cellFive.textContent === ''){
  cellFive.textContent = 'x';
}else if (cellFive.textContent === 'x') {
  cellFive.textContent = 'o';
}else {
  cellFive.textContent = '';
}
})

var cellSix =  document.querySelector('#six')
cellSix.addEventListener('click',function(){
if (cellSix.textContent === ''){
  cellSix.textContent = 'x';
}else if (cellSix.textContent === 'x') {
  cellSix.textContent = 'o';
}else {
  cellSix.textContent = '';
}
})

var cellSeven =  document.querySelector('#seven')
cellSeven.addEventListener('click',function(){
if (cellSeven.textContent === ''){
  cellSeven.textContent = 'x';
}else if (cellSeven.textContent === 'x') {
  cellSeven.textContent = 'o';
}else {
  cellSeven.textContent = '';
}
})

var cellEight =  document.querySelector('#eight')
cellEight.addEventListener('click',function(){
if (cellEight.textContent === ''){
  cellEight.textContent = 'x';
}else if (cellEight.textContent === 'x') {
  cellEight.textContent = 'o';
}else {
  cellEight.textContent = '';
}
})

var cellNine =  document.querySelector('#nine')
cellNine.addEventListener('click',function(){
if (cellNine.textContent === ''){
  cellNine.textContent = 'x';
}else if (cellNine.textContent === 'x') {
  cellNine.textContent = 'o';
}else {
  cellNine.textContent = '';
}
})











// for loop to add event listeners to all the squares
