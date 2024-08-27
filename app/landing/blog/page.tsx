"use client";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function BlogPage() {
  const defaultContent = "capcipcup";
  return (
    <div className="border w-max bg-maroon">
      <h1 className={title()}>Blog</h1>
      <div className="grid grid-cols-4 grid-flow-row gap-4 border">
        <div className="mt-7">
          <Button>Click me</Button>
        </div>
        <div>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-start">
          <div className="mr-2">
            <Button isIconOnly color="success">
              <FontAwesomeIcon
                icon={faCheck}
                className="fas fa-check"
              ></FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button isIconOnly color="danger">
              <FontAwesomeIcon
                icon={faTrash}
                className="fas fa-trash"
              ></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
