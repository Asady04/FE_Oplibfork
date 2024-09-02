"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faCircleUser,
  faCaretDown,
  faUserGear,
  faUserPen,
  faUserGroup,
  faUserGraduate,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Telkom University Library"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <AdminLayout>
      <section>
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-12 ml-5">
              <Sidebar />
            </div>

            <div className="flex-1 px-[60px] py-4 mt-2">
              {/* Header dengan kalimat Good Morning */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="italic font-extrabold text-[28px]">
                    Good morning <span>Fayyadh Asady</span>
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

              {/* Dropdown untuk pemilihan library */}
              <div className="text-end mb-4 mr-[80px] -mt-7">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize bg-white shadow-md shadow-black text-[12px] font-semibold pl-6 pr-6"
                    >
                      {selectedValue}{" "}
                      <FontAwesomeIcon icon={faCaretDown} className="w-[12px]" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="Open Library - Bandung">
                      Open Library - Bandung
                    </DropdownItem>
                    <DropdownItem key="Open Library - Jakarta A">
                      Open Library - Jakarta A
                    </DropdownItem>
                    <DropdownItem key="Open Library - Jakarta B">
                      Open Library - Jakarta B
                    </DropdownItem>
                    <DropdownItem key="Open Library - Surabaya">
                      Open Library - Surabaya
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              {/* Total catalog dan lainnya */}
              <div className="flex gap-4 -ml-4">
                {/* Container co-admins */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faUserGear} className="w-[25px]" />
                    Co-Admin
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-3xl mt-1">
                    12
                  </h4>
                </div>

                {/* Container Staff */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faUserPen} className="w-[25px]" />
                    Staff
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-3xl mt-1">
                    12
                  </h4>
                </div>

                {/* Container Lecture */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faUserGroup} className="w-[25px]" />
                    Lecture
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-3xl mt-1">
                    12
                  </h4>
                </div>

                {/* Container Student */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faUserGraduate} className="w-[25px]" />
                    Student
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-3xl mt-1">
                    12
                  </h4>
                </div>

                {/* Container Catalog */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faSwatchbook} className="w-[25px]" />
                    Catalog
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-2xl mt-1">
                    12,890
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
