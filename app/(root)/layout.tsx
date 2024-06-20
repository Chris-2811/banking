import Sidebar from "@/components/Sidebar";
import "../globals.css";
import Topbar from "@/components/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full flex-col font-sans lg:flex-row">
      <Sidebar />
      <Topbar />
      {children}
    </main>
  );
}
