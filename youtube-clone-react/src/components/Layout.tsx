import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar";
import "./Layout.css";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <>
      <Header
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
      />
      <Sidebar isOpen={sidebarOpen} />
      <main className={`app-main${sidebarOpen ? "" : " sidebar-collapsed"}`}>
        <Outlet />
      </main>
    </>
  );
}
