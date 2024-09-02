import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ModalReviewUserA from "./modalReviewUserA";
import ModalDelateUser from "./modalDelateUser";

export default function ContentAccountManagement() {
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
          NAME
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          ID NUMBER
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          USERNAME
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          PASSWORD
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
          EMAIL
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tr-md rounded-br-md">
          ACTION
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-center">Tony Reichert</TableCell>
          <TableCell className="text-center">1101223089</TableCell>
          <TableCell className="text-center">ndn-rg</TableCell>
          <TableCell className="text-center">app&paltform</TableCell>
          <TableCell className="text-center">
            username@telkomuniversity.ac.id
          </TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalReviewUserA />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="w-[13px] p-1 bg-orange-red rounded-md cursor-pointer"
            />
            <ModalDelateUser />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-center">Zoey Lang</TableCell>
          <TableCell className="text-center">1101229067</TableCell>
          <TableCell className="text-center">ndn-rg</TableCell>
          <TableCell className="text-center">app&paltform</TableCell>
          <TableCell className="text-center">
            username@telkomuniversity.ac.id
          </TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <FontAwesomeIcon
              icon={faEye}
              className="w-[13px] p-1 bg-forest-green rounded-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="w-[13px] p-1 bg-orange-red rounded-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="w-[12px] p-1 bg-fire-brick rounded-md cursor-pointer"
            />
          </TableCell>
        </TableRow>
        <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">3</TableCell>
          <TableCell className="text-center">Jane Fisher</TableCell>
          <TableCell className="text-center">1101229053</TableCell>
          <TableCell className="text-center">ndn-rg</TableCell>
          <TableCell className="text-center">app&paltform</TableCell>
          <TableCell className="text-center">
            username@telkomuniversity.ac.id
          </TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <FontAwesomeIcon
              icon={faEye}
              className="w-[13px] p-1 bg-forest-green rounded-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="w-[13px] p-1 bg-orange-red rounded-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="w-[12px] p-1 bg-fire-brick rounded-md cursor-pointer"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
