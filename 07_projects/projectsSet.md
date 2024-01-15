# Projects related to DOM

# Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-gfskuj?file=1-colorChanger%2Findex.html)

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
    //below code is just for user experience the main code is in the top ... what should i actually follow
    if (e.target.id === 'blue') {
      h1.style.color = 'white';
      h2.style.color = 'white';
    }
    if (e.target.id === 'white') {
      h1.style.color = 'black';
      h2.style.color = 'black';
    }
    if (e.target.id === 'yellow') {
      h1.style.color = 'black';
      h2.style.color = 'black';
    }
  });
});


```