import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-sans">
      {children}
      <div className="hidden w-1/2 items-center justify-end bg-blue-100 lg:flex">
        <img
          src="/icons/auth-image.svg"
          alt=""
          className="xxl:w-[625px] lg:w-[85%] 3xl:w-[75%]"
        />
      </div>
    </main>
  );
}
