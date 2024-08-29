export default function BookLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex  gap-4 ">
        <div className="max-w-5xl w-full text-start">
          {children}
        </div>
      </section>
    );
  }
  