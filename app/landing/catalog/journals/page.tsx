import JournalsLayout from "./layout";
import { ContentJournals } from "@/components/contentJournals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";

export default function JournalsPage() {
  return (
    <JournalsLayout>
      <section className="mb-8">
        <h1 className="flex text-maroon text-3xl font-bold text-start underline decoration-maroon underline-offset-2 gap-2">
          <FontAwesomeIcon icon={faBookJournalWhills} className="w-[29px]"/> Journals
        </h1>
        <div className="mt-6 mb-12">
          <ContentJournals />
        </div>
      </section>
    </JournalsLayout>
  );
}
