const coding = ['js' , 'ruby', 'cpp', 'java'];
const values = coding.forEach(element =>{
    // console.log(element);
    return element;
});
// console.log(values); 

// forEach have a problem ... it returns nothing so it is not ideal to store any data

const myNums  = [1,2,3,4,5,6,7,8,9];

const newNums = myNums.filter( num =>( num<4));
// console.log(newNums);

// Previous prob with for each .. just take a new empty array
const newNums2 = [];
myNums.forEach(element => {
    if(element >4){
        newNums2.push(element)
    }
});
// console.log(newNums2);

const booksArray = [
    {
      title: 'The Great Gatsby',
      genre: 'Classic Fiction',
      publish: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      genre: 'Fiction',
      publish: 1960
    },
    {
      title: '1984',
      genre: 'Dystopian Fiction',
      publish: 1949
    },
    {
      title: 'The Catcher in the Rye',
      genre: 'Coming-of-age Fiction',
      publish: 1951
    },
    {
      title: 'Pride and Prejudice',
      genre: 'Romantic Fiction',
      publish: 1813
    },
    {
      title: 'The Hobbit',
      genre: 'Fantasy',
      publish: 1937
    },
    {
      title: 'The Lord of the Rings',
      genre: 'Fantasy',
      publish: 1954
    },
    {
      title: 'Harry Potter and the Philosopher\'s Stone',
      genre: 'Fantasy',
      publish: 1997
    },
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      genre: 'Science Fiction',
      publish: 1979
    },
    {
      title: 'Brave New World',
      genre: 'Dystopian Fiction',
      publish: 1932
    }
  ];
  
 
const userBooks = booksArray.filter(book => book.publish>1950)
const foundedBooks = userBooks.filter(books =>(books.title == "To Kill a Mockingbird"));
console.log(foundedBooks);

// filter give those element who pass the condition