
import useBooksData from '../Hooks/useBooksData';
import BookCard from '../components/BookCard';
import Hero from '../components/Hero';

const Home = () => {
    const {data} = useBooksData();
    
    
    return (
        <div>
            <Hero/>
            <div className='grid lg:grid-cols-3 gap-6 mt-10 '>
            {
                data.map(book => <BookCard key={book.bookId} book={book} />)
            }
            </div>
        </div>
    );
};

export default Home;