"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import ModalAddUser from "@/components/components_admin/modalAddUser";
import ContentAccountManagement from "@/components/components_admin/contentAccountManagement";
import { Select, SelectItem, Input } from "@nextui-org/react"; // Pastikan Input diimpor
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faCircleUser,
  faSquarePlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const role = [
    { key: "admin", label: "Administrator" },
    { key: "coadmin", label: "Co-Administrator" },
    { key: "staff", label: "Library Staff" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
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
      placeholder="Search by name..."
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
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-12 ml-5 relative z-20">
              <Sidebar />
            </div>

            <div className="flex-1 px-[60px] py-4 mt-2">
              {/* Header dengan kalimat Good Morning */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="italic font-extrabold text-[28px]">
                    Good morning <span>Aliza Nurfitrian</span>
                  </h2>
                  <h4 className="italic text-sm">
                    Here’s what’s happening at Open Library Telkom <br />
                    University today!
                  </h4>
                </div>

                <div className="bg-white text-dark-red flex items-center gap-8 p-2 rounded-lg">
                  {/* Tanggal */}
                  <p className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                    Today, 24th March
                  </p>

                  {/* Jam Operasional */}
                  <p className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                    08.00 - 16.00
                  </p>

                  {/* Profile Admin */}
                  <h2 className="flex items-center font-bold text-xl gap-2">
                    Admin{" "}
                    <FontAwesomeIcon icon={faCircleUser} className="w-[30px]" />
                  </h2>
                </div>
              </div>

              <div className="flex bg-white p-3 rounded-lg shadow-md justify-between w-full gap-2 px-5 relative z-10">
                {/* Search input */}
                <div className="flex flex-row w-full gap-5">
                  <div className="flex max-w-[300px] items-center">
                    {searchInput}
                  </div>

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

                {/* add data */}
                <div className="flex items-center">
                  <ModalAddUser />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content table */}
        <div className="mt-8 max-w-[990px]  ml-[130px]">
          <ContentAccountManagement />
        </div>
      </section>
    </AdminLayout>
  );
}
