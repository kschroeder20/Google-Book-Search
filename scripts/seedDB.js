const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch", { useNewUrlParser: true }
);

const bookSeed = [
    {
        title: "Blink",
        author: "Malcolm Gladwell",
        description:
            `In his landmark bestseller The Tipping Point, Malcolm Gladwell redefined how we understand the world around us. Now, in Blink, he revolutionizes the way we understand the world within. Blink is a book about how we think without thinking, about choices that seem to be made in an instant-in the blink of an eye-that actually aren't as simple as they seem. Why are some people brilliant decision makers, while others are consistently inept? Why do some people follow their instincts and win, while others end up stumbling into error? How do our brains really work-in the office, in the classroom, in the kitchen, and in the bedroom? And why are the best decisions often those that are impossible to explain to others?In Blink we meet the psychologist who has learned to predict whether a marriage will last, based on a few minutes of observing a couple; the tennis coach who knows when a player will double-fault before the racket even makes contact with the ball; the antiquities experts who recognize a fake at a glance. Here, too, are great failures of "blink": the election of Warren Harding; "New Coke"; and the shooting of Amadou Diallo by police. Blink reveals that great decision makers aren't those who process the most information or spend the most time deliberating, but those who have perfected the art of "thin-slicing"-filtering the very few factors that matter from an overwhelming number of variables.`,
        image: "http://books.google.com/books/content?id=VKGbb1hg8JAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        url: "https://play.google.com/store/books/details?id=VKGbb1hg8JAC&source=gbs_api",
        date: new Date(Date.now())
    },
    {
        title: "Game of Thrones",
        author: "George R. R. Martin",
        description:
            `The kingdom of the royal Stark family faces its ultimate challenge in the onset of a generation-long winter, the poisonous plots of the rival Lannisters, the emergence of the Neverborn demons and the arrival of barbarian hordes. 75,000 first printing.`,
        image: "http://books.google.com/books/content?id=i_SorqUvsOEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        url: "http://books.google.com/books?id=i_SorqUvsOEC&dq=Game+of+Thrones&hl=&source=gbs_api",
        date: new Date(Date.now())
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
