export default function NewsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex items-center justify-center gap-4 ">
        <div className="flex-growr">
          {children}
        </div>
      </section>
    );
  }
  