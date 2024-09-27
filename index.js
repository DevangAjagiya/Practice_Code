// console.log( 'Hello, world!' );
// alert( 'Succesfully' );

// let a=50, b=20;
// console.log( a+b, a-b, a*b, a/b );

// function hello(a,b){
//   return a+b;
// }
// console.log( hello(a,b) );

// let x = 0;
// while (x < 10) {
//   document.write(x); 
//   x++;
// }
 
// Functions

function selected(selectObject){
  let numObj = 1;
  for (let i = 0; i < selectObject.options.length; i++){
    if (selectObject.options[i].selected){
      numObj++;
    }
  }
  return numObj;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  alert('Hello, world!');
});