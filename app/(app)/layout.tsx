import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}