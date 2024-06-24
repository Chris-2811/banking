import Sidebar from "@/components/Sidebar";
import "../globals.css";
import Topbar from "@/components/Topbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  console.log("Root Layout");

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full flex-col font-sans lg:flex-row">
      <Sidebar user={loggedIn} />
      <Topbar />
      {children}
    </main>
  );
}
