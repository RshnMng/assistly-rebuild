import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
//
function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar />
        <div className="bg-yellow-500 flex-1">{children}</div>
        {/* flex and justify-center is supposed to be on the div above; also lg:justify-start, items-start, max-w-5xl mx-auto w-full */}
      </div>
    </div>
  );
}
export default AdminLayout;
