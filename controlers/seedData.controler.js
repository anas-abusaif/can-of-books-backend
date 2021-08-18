"use strict";

const User = require("../models/book.model");

const bookSeed = () => {
  const newBook = new User({
    email: 'anasabusief@gmail.com',
    books: [{
      title: 'In Search of Lost Time',
      description: `Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work`,
      status: 'unread'
    }, {
      title: `Ulysses`,
      description: `Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses)`,
      status: 'unread'
    }, {
      title: ` Don Quixote`,
      description: `Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper`,
      status: 'unread',
    }]

  })
  newBook.save();
  console.log(newBook)
}
module.exports=bookSeed;