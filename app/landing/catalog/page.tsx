import CatalogLayout from './layout';
import { ContentCatalog } from '@/components/contentCatalog';


export default function CatalogPage() {
  // Assuming you have the counts for new releases, books, and journals
  const newReleasesCount = 20;
  const booksCount = 1130;
  const journalsCount = 1815;
  const totalCount = newReleasesCount + booksCount + journalsCount;

  return (
    <CatalogLayout>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Total Items</h4>
            <h2 className="text-2xl font-bold">{totalCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">New Releases</h4>
            <h2 className="text-2xl font-bold">{newReleasesCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Books</h4>
            <h2 className="text-2xl font-bold">{booksCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Journals</h4>
            <h2 className="text-2xl font-bold">{journalsCount}+</h2>
          </div>
        </div>
        <ContentCatalog />
      </section>
    </CatalogLayout>
  );
}
