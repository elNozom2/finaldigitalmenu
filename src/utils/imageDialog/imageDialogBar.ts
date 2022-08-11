import store from "@/store";
import { imageDialog } from "./imageDialog";
export const openImageDialog = (Title: string, path: string) => {
  store.commit("ui/stopImageDialog");
  let dialog: imageDialog = {
    Active: true,
    Title,
    path,
  };
  store.commit("ui/setImageDilaog", dialog);
};

export const closeSnack = () => {
  store.commit("ui/stopDialog");
};
