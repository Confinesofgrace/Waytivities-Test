function BookCards({books}) {
    return (
      <div id="book-cards">
       {books.map((book, index)=>(
        <div key={index}>
          <img src={book.coverImage} alt={book} />
          <h3> {book.title}</h3>
          <p> {book.author} </p>
          <p> {book.description} </p>

        </div>
       ))}
      </div>
    );
  }
  
  export default BookCards;