import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";
import customTheme from "theme";

interface ToastData {
  title: string;
  status: UseToastOptions["status"];
  description?: string;
}

const { toast } = createStandaloneToast({ theme: customTheme });

export const showToast = (toastData: ToastData) => {
  const { title, status, description } = toastData;
  toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
    position: "bottom-right",
  });
};
