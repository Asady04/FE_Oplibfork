import BookLayout from './layout';
import { ContentBook } from '@/components/contentBook';


export default function JournalsPage() {

  return (
    <BookLayout>
      <section className='mb-8'>
        <ContentBook />
      </section>
    </BookLayout>
  );
}
