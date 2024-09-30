"use client";
import React from "react";
import LectureLayout from "./layout";
import Sidebar from "@/components/components_user/sidebar";
import LectureHeader from "@/components/components_user/header";
import JournalsPage from "@/components/components_user/journalsPage";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeLecture() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <LectureLayout>
      <section className="flex flex-row space-x-3">
        <div className="grow max-w-min">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div
          className={`mt-8 grow space-y-5 ${sidebarOpen ? "pl-96" : "pl-28"} pr-12 pb-5 duration-200`}
          onClick={() => setSidebarOpen(false)}
        >
          <LectureHeader />
          <JournalsPage sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </section>
    </LectureLayout>
  );
}
