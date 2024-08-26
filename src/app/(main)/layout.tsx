import { Header } from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-4">
      <Header />
      {children}
    </div>
  );
}