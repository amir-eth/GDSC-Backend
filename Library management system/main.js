const mongoose = require('mongoose');
const Book = require('./MGDb');
const prompt = require('prompt-sync')();

mongoose.connect('mongodb://localhost/LibraryDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

//A function to add a new book

const response = prompt("Do you want to create a new book? (Yes/No)").toLowerCase()
if (response === "no"){
    console.log("let's move on then...")
} 
else if (response === "yes"){
    const title = prompt("Enter the title name: ");
    const author = prompt("Enter the author's name: ");
    const yearPublished = prompt("Enter the year it was first published: ");
    const genres = prompt("Enter the genre name: ");
    const availableCopies = prompt("Enter the number of available copies: ");

    create();

    async function create() {
        const book = await Book.create({
            title: title,
            author: author,
            yearPublished: yearPublished,
            genres: genres,
            availableCopies: availableCopies
        });
        console.log(book);
    }
    }
else {
    console.log("Invalid input. Exiting the terminal...")
    process.exit(1)
}

//A function to update the availableCopies of a book by title

const responseTwo = prompt("Do you want to update the available copies? (Yes/No)").toLowerCase()
if (responseTwo === "no"){
 console.log("let's move on then...")
 process.exit(0)
}
else if (responseTwo === "yes"){
    const titleToBeUpdated = prompt("Enter the Title of the book: ")
    const updatedAvailableCopies = prompt("Enter the updated number of the available copies: ")
    update()
    async function update(){
        await Book.findOneAndUpdate({title: titleToBeUpdated}, {availableCopies: updatedAvailableCopies})
        console.log("Successfully updated!")
    }
    }
else {
    "Invalid input. Exiting..."
    process.exit(1)
}


//A Function to find all the books by an author

const responseThree = prompt("Do you want to find books written by a specific author?")
if (responseThree === "no"){
    console.log("let's move on then...")
}
else if (responseThree === "yes"){
    const Author = prompt("Enter the name of the Author to find the book: ")
    find()
    async function find() {
       const lists = await Book.find({author: Author})
        console.log(`Here are the books written by ${Author}`)
        console.log(lists)
    }
}
else {
    console.log("Invalid input. Exiting...")
    process.exit(1)
}

//A Function to delete a book by its title

const responseFour = prompt("Do you want to delete a book by its title?")
if(responseFour === "no"){
    console.log("Terminal Exiting...")
}
else if (responseFour === "yes"){
    const titleToBeDeleted = prompt("Enter the title of the book you want delete: ")
    deleteBook()
    async function deleteBook() {
        await Book.findOneAndDelete({title: titleToBeDeleted})
        console.log("Successfully Deleted!")
    }
}
else {
    console.log("Invalid input. Exiting...")
}