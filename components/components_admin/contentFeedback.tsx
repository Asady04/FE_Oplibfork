import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ModalFeedback from "./modalFeedback";

export default function ContentFeedback() {
  return (
    <Table
      aria-label="Account Management Table"
      className="border-separate border-spacing-y-2"
    >
      <TableHeader>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center rounded-tl-md rounded-bl-md">
          Date
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Report Author
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
        Feedback Types
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Description
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center "> <span className="bg-orange-red text-white rounded-md p-1 pr-6 pl-6 text-xs font-semibold">Suggestions</span></TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalFeedback />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center"><span className="bg-medium-violet text-white rounded-md p-1 pr-6 pl-6 text-xs font-semibold">Appreciation </span></TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalFeedback />
          </TableCell>
        </TableRow>
        <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center"><span className="bg-fire-brick text-white rounded-md p-1 pr-7 pl-7 text-xs font-semibold">Complaints</span></TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalFeedback />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
