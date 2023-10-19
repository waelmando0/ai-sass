import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="z-[50] hidden h-full md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <section className="md:pl-72">
        <Navbar />
        {children}
      </section>
    </>
  );
};

export default DashboardLayout;
