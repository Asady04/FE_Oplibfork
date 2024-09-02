import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { faSignOutAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModalDelateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="bg-fire-brick text-white rounded-md p-1 text-xs cursor-pointer"
        onClick={onOpen} // Ganti onPress dengan onClick
      >
        <FontAwesomeIcon icon={faTrash} className="w-[13px]" />
      </div>

      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Delate
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure delate data ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Link color="primary"onPress={onClose} href="/">
                  Sure
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
