import { useParams } from "react-router-dom";

function BookDetails() {

    const {title} = useParams

    return (
      <div id="book-details">

        <h3> {title}</h3>
        <h3>Book Title</h3>

        <div id="front-cover">
            ...
        </div>

        <div>
            About Book
        </div>
        
      </div>
    );
}
  
export default BookDetails;