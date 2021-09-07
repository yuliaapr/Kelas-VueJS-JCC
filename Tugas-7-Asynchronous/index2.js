// soal 2 
var readBooksPromise = require('./promise.js') 

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
function startReading(remainingTime, books, index) {
    readBooksPromise(remainingTime, books[index], function(time) {
        const nextBook = index + 1;
        if (nextBook < books.length) {
            startReading(time, books, nextBook);
        }
    });
}

startReading(10000, books[0], books[1], books[2], books[3]);