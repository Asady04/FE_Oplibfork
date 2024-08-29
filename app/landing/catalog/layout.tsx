export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center gap-4 ">
      <div className="max-w-5xl w-full text-center">
        {children}
      </div>
    </section>
  );
}
