const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Async taks completed');
      resolve();
    }, 1000);
  });
  
  promiseOne.then(function () {
    console.log('Promise taks completed');
  });
  
  const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ username: 'Hasan', email: 'hasan@abc.com' });
    }, 1000);
  });
  
  promiseTwo.then(function (user) {
    console.log(user);
  });
  
  //promise three
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: 'Molla', email: 'Molla@abc.com' });
      } else {
        reject('Error : Something went wrong');
      }
    }, 1000);
  });
  promiseThree
    .then(function (user) {
      console.log(user);
      return user.username;
    })
    .then(function (username) {
      console.log(username);
    })
    .catch(function (err) {
      console.log(err);
    })
    .finally(() => console.log('Promise is reject or resolved finally'));
  // promise three ends
  
  // Promise four starts
  
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: 'Hasib', password: '12abc' });
      } else {
        reject("Error: Hasib's website went wrong went");
      }
    }, 1000);
  });
  
  async function consumePromiseFour() {
    const response = await promiseFour; // Promise is object so we can't write it like function here
    console.log(response);
  }
  consumePromiseFour();
  
  async function getAllUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  // getAllUsers();
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  