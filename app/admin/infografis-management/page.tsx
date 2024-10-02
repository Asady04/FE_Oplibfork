"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ModalAddRoom from "@/components/components_admin/modalAddRoom";
import ContentInfografis from "@/components/components_admin/contentInfografis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  return (
    <AdminLayout>
      <section>
        {/* content header */}
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full z-20">
                <Sidebar />
              </div>
            </div>

            <div className="flex-1 max-w-[960px] mx-auto mt-6">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              <div className="flex mt-6 justify-start bg-white p-3 rounded-lg shadow-md w-full gap-2 relative z-10">
                {/* title */}
                <h3 className="flex text-dark-red text-2xl font-bold gap-4 items-center pl-3">
                  <FontAwesomeIcon icon={faCameraRetro} />
                  Upload Infografis
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* content table */}
        <div className="mt-8 mb-8 max-w-[960px] mx-auto">
          <ContentInfografis />
        </div>
      </section>
    </AdminLayout>
  );
}
