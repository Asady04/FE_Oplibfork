import NextLink from "next/link";

export const ContentBeranda = () => {
    return (
      <div>
        {/* image telkom */}
        <div>
            <img src="" alt="" />
        </div>

        {/* content book */}
        <div className="mt-5 mb-5">
            <div className="flex justify-between">
                <h2 className="text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2">Books</h2>
                <NextLink href="/landing/catalog/books" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">Show all</NextLink>
            </div>
            <div className="grid grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-md">
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

        {/* content karya ilmiah */}
        <div className="mt-8 mb-5">
            <div className="flex justify-between">
                <h2 className="text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2">Journals</h2>
                <NextLink href="/landing/catalog/journals" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">Show all</NextLink>
            </div>
            <div className="grid grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-md">
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

        {/* content recent news */}
        <div className="mt-8 mb-10">
        <h2 className="text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2">Recent News</h2>
        <div>
            <div className="grid grid-cols-2 gap-2 rounded-md mt-4 p-2">
            <div className="relative group">
                <img 
                src="/assets/image/news1.png" 
                alt="cover news 1" 
                className="h-[250px] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/link-to-page-1" className="text-white text-lg font-semibold">Go to Page</a>
                </div>
            </div>
            <div className="relative group">
                <img 
                src="/assets/image/news2.png" 
                alt="cover news 2" 
                className="h-[250px] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/link-to-page-2" className="text-white text-lg font-semibold">Go to Page</a>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-md mt-2 p-2">
            <div className="relative group">
                <img 
                src="/assets/image/news3.png" 
                alt="cover news 3" 
                className="h-[180px] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/link-to-page-3" className="text-white text-lg font-semibold">Go to Page</a>
                </div>
            </div>
            <div className="relative group">
                <img 
                src="/assets/image/news4.png" 
                alt="cover news 4" 
                className="h-[180px] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/link-to-page-4" className="text-white text-lg font-semibold">Go to Page</a>
                </div>
            </div>
            <div className="relative group">
                <img 
                src="/assets/image/news5.png" 
                alt="cover news 5" 
                className="h-[180px] w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/link-to-page-5" className="text-white text-lg font-semibold">Go to Page</a>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    );
  };
  