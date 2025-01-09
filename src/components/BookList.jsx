import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {books.map((book, index) => (
        <SingleBook key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;