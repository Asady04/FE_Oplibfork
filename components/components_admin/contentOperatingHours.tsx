import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ModalDelateTime from "./modalDelateTime";

export default function ContentOperatingHours() {
  return (
    <Table
      aria-label="Account Management Table"
      className="border-separate border-spacing-y-2"
    >
      <TableHeader>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center rounded-tl-md rounded-bl-md">
          NUMBER
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center rounded-tl-md rounded-bl-md">
          DAY
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          START TIME
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          END TIME
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          ACTION
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-center">Monday</TableCell>
          <TableCell className="text-center">08.00 AM</TableCell>
          <TableCell className="text-center">05.00 PM</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalDelateTime />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-center">Tuesday</TableCell>
          <TableCell className="text-center">08.00 AM</TableCell>
          <TableCell className="text-center">05.00 PM</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalDelateTime />
          </TableCell>
        </TableRow>
        <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">3</TableCell>
          <TableCell className="text-center">Wednesday</TableCell>
          <TableCell className="text-center">08.00 AM</TableCell>
          <TableCell className="text-center">05.00 PM</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalDelateTime />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
