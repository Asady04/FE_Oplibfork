import NewsLayout from "./layout";
import { ContentNews } from "@/components/contentNews";
import { ContentLatestNews } from "@/components/contentLatestNews"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NewsPage() {
  return (
    <NewsLayout>
      <section className="mb-8">
        <div className="flex gap-4 mt-3 mb-12">
          <ContentNews />
          <ContentLatestNews />
        </div>
      </section>
    </NewsLayout>
  );
}
