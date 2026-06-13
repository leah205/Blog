export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-3/4 m-auto p-10 rounded-md shadow-md border-1 bg-mist-50 border-mist-400">
      {children}
    </div>
  );
}
