"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ContentDailyReports from "@/components/components_admin/contentDailyReports";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const searchInput = (
    <Input
      isClearable
      radius="lg"
      classNames={{
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-default-200/50",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Search Daily Reports"
      startContent={
        <FontAwesomeIcon
          icon={faSearch}
          className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
        />
      }
    />
  );

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
                {/* search data */}
                <div className="flex items-center">{searchInput}</div>

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
              </div>
            </div>
          </div>
        </div>

        {/* content table */}
        <div className="mt-10 max-w-[960px] mx-auto">
        <ContentDailyReports />
        </div>
      </section>
    </AdminLayout>
  );
}