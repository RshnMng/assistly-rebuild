"use client";
import { ChatbotCharacteristic } from "@/types/types";
import React from "react";
import { OctagonX } from "lucide-react";
import { useMutation } from "@apollo/client/react";
import { REMOVE_CHARACTERISTIC } from "@/app/api/graphql/mutations/mutations";
import { toast } from "sonner";

//

function Characteristic({
  characteristic,
  index,
}: {
  characteristic: ChatbotCharacteristic;
  index: number;
}) {
  const [removeCharacteristic] = useMutation(REMOVE_CHARACTERISTIC, {
    refetchQueries: ["GetChatbotById"],
  });

  const handleRemoveCharacteristic = async () => {
    try {
      await removeCharacteristic({
        variables: {
          id: characteristic.id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li
      key={characteristic.id}
      className={
        index === 0
          ? "w-full relative p-8 bg-white border rounded-md"
          : "relative p-8 bg-white border rounded-md"
      }
    >
      {characteristic.content}

      <OctagonX
        className="w-6 h-6 stroke-white fill-red-500 absolute top-1 right-1 cursor-pointer hover:opacity-50 -rotate-45"
        onClick={() => {
          console.log("working");
          const promise = handleRemoveCharacteristic();
          toast.promise(promise, {
            loading: "Removing...",
            success: "Characteristic removed",
            error: "Failed to remove characteristic",
          });
        }}
      />
    </li>
  );
}
export default Characteristic;
