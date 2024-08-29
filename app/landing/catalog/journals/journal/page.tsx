import JournalLayout from './layout';
import { ContentJournal } from '@/components/contentJournal';


export default function JournalsPage() {

  return (
    <JournalLayout>
      <section className='mb-8'>
        <ContentJournal />
      </section>
    </JournalLayout>
  );
}
