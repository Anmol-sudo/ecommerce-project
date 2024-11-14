"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    // If Model is not open
    if(!isOpen) {
      // Open it
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      Root Page
    </div>
  );
};

export default SetupPage;
