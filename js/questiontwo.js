const books = [
    {
        title: "A Design Patterns: Elements of Reusable Object-Oriented Software",
        img: "img/media/design_patterns.jpg",
        genre: "Tech",
        format: "Paperback",
        year: 1994,
        category: "Books",
        authors: [
            "Erich Gamma",
            "Richard Helm",
            "Ralph Johnson",
            "John Vlissides"
        ],
        publisher: "Prentice Hall",
        isbn: '978-0201633610'
    },
    {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        img: "img/media/clean_code.jpg",
        genre: "Tech",
        format: "Ebook",
        year: 2008,
        category: "Books",
        authors: [
            "Robert C. Martin"
        ],
        publisher: 'Prentice Hall',
        isbn: '978-0132350884'
    }
];

// Get the element where you want to display the book information
const bookListElement = document.getElementById("bookList");

// Loop through the books array and create HTML elements for each book
books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.img}" alt="${book.title}">
        <p>Genre: ${book.genre}</p>
        <p>Format: ${book.format}</p>
        <p>Year: ${book.year}</p>
        <p>Category: ${book.category}</p>
        <p>Authors: ${book.authors.join(", ")}</p>
        <p>Publisher: ${book.publisher}</p>
        <p>ISBN: ${book.isbn}</p>
    `;
    bookListElement.appendChild(bookDiv);
});