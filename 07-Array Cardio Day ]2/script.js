const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

let someResult = people.some(person => person.year < 1971)
let everyResult = people.every(person => person.year < 2020)

console.log('someResult', someResult)
console.log('everyResult', everyResult)


let findResult = comments.find(comment => comment.id === 823423)

console.log('findResult', findResult)

let findIndexResult = comments.findIndex(comment => comment.id === 823423)
comments.splice(findIndexResult, 1)
console.log('comments', comments)
