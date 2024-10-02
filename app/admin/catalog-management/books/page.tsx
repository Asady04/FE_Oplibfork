"use client";
import React from "react";
import AdminLayout from "./layout";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ContentCatalogBooks from "@/components/components_admin/contentBooks";
import { Sidebar } from "@/components/components_admin/sidebar";

export default function HomeAdmin() {
  return (
    <AdminLayout>
      <section>
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex  h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full z-20">
                <Sidebar />
              </div>
            </div>

            <div className="flex-1 max-w-[960px] mx-auto mt-6">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />
            </div>
          </div>
        </div>

        {/* content table */}
        <div className="-mt-12 mb-9 max-w-[960px] mx-auto">
          <ContentCatalogBooks />
        </div>
      </section>
    </AdminLayout>
  );
}
