export default function NewsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex items-center justify-center gap-4 ">
        <div className="max-w-6xl w-full text-center">
          {children}
        </div>
      </section>
    );
  }
  