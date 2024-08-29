import BooksLayout from './layout';
import { ContentBooks } from '@/components/contentBooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


export default function JournalsPage() {

  return (
    <BooksLayout>
      <section className='mb-8'>
        <h1 className='flex text-maroon text-3xl font-bold text-start underline decoration-maroon underline-offset-2 gap-2'>
        <FontAwesomeIcon icon={faBook} className='w-[27px]' />Books</h1>
        <div className='mt-6 mb-12'>
            <ContentBooks />
        </div>
      </section>
    </BooksLayout>
  );
}
