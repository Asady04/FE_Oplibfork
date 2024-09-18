"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ContentFeedback from "@/components/components_admin/contentFeedback";
import { Select, SelectItem } from "@nextui-org/react";

export default function HomeAdmin() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const role = [
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

  return (
    <AdminLayout>
      <section>
        {/* content header */}
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed w-12 ml-5 z-20">
              <Sidebar />
            </div>

            <div className="flex-1 max-w-[960px] mx-auto mt-6">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              <div className="flex mt-7 bg-white p-3 rounded-lg shadow-md w-full gap-4 relative z-10">
                {/* dropdown */}
                <Select
                  label="Select a library"
                  placeholder="Select a library"
                  className="flex-grow max-w-[290px] text-dark-red font-bold"
                >
                  {library.map((library) => (
                    <SelectItem key={library.key}>{library.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  label="Select a user"
                  placeholder="Select a user"
                  className="flex-grow max-w-[220px] text-dark-red font-bold"
                >
                  {role.map((role) => (
                    <SelectItem key={role.key}>{role.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* content table */}
        <div className="mt-10 max-w-[960px] mx-auto">
          <ContentFeedback />
        </div>
      </section>
    </AdminLayout>
  );
}
