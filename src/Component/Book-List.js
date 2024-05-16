import { useState } from "react";

const BookList = () => {

    const [books,setBooks] = useState([
        {title: 'Advancement into Eternal Progression', author: 'Ademola Adebayo'},
        {title: 'Chroniles of Little Fey', author: 'Feyisayo Bolaji'},
        {title: 'Relationship Matters', author: 'Ademola Adebayo'},
        {title: 'The Smie of the Dancing Naked', author: 'Damilola Akinlolu'}

    ]);

    return (  
        <div id="book-list">
            {BookList.map((book) => (
                <div id="book-preview" key={book.id}>
                    <h2> {book.title} </h2>
                </div>
            ))}

        </div>
    );
}
 
export default BookList;