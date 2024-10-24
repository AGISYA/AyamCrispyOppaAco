import HeaderAdmin from "./header";
import SidebarAdmin from "./sidebar";
// import SidebarAdmin from "./sidebar";

export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className="flex h-screen w-screen text-black">
          <SidebarAdmin />
          <div className="h-screen w-full">
            <div className="S flex-1 h-full overflow-auto sticky">
              <HeaderAdmin />
              {children}
            </div>
            {/* <HeaderAdmin />
            {children} */}
          </div>
        </div>
      </body>
    </html>
  );
}
