import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ModalViewRoom from "./modalReviewRoom";
import ModalDelateData from "./modalDelateUser";
import ModalEditRoom from "./modalEditRoom";

export default function ContentRoomRecervations() {
  return (
    <Table
      aria-label="Account Management Table"
      className="border-separate border-spacing-y-2"
    >
      <TableHeader>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tl-md rounded-bl-md">
          NO
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          IMAGE
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          ROOM NAME
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          CAPACITY
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          STATUS
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tr-md rounded-br-md">
          ACTION
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-center">
            <img
              src="/assets/image/perpus.png"
              alt="Room 1"
              className="w-[130px] rounded-md inline-block"
            />
          </TableCell>
          <TableCell className="text-center">Room 1</TableCell>
          <TableCell className="text-center">4</TableCell>
          <TableCell className="text-center">Free</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
            <ModalViewRoom />
            <ModalEditRoom />
            <ModalDelateData />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-center">
            <img
              src="/assets/image/perpus.png"
              alt="Room 1"
              className="w-[130px] rounded-md inline-block"
            />
          </TableCell>
          <TableCell className="text-center">Room 2</TableCell>
          <TableCell className="text-center">8</TableCell>
          <TableCell className="text-center">Free</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
            <ModalViewRoom />
            <ModalEditRoom />
            <ModalDelateData />
          </TableCell>
        </TableRow>
        <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">3</TableCell>
          <TableCell className="text-center">
            <img
              src="/assets/image/perpus.png"
              alt="Room 1"
              className="w-[130px] rounded-md inline-block"
            />
          </TableCell>
          <TableCell className="text-center">Room 3</TableCell>
          <TableCell className="text-center">12</TableCell>
          <TableCell className="text-center">Paid</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
            <ModalViewRoom />
            <ModalEditRoom />
            <ModalDelateData />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
