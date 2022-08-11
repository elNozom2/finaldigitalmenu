import { MutationTree } from "vuex";
import { UiState } from "./types";
import { snackBarModel } from "@/utils/snack/snackbar.model";
import { dialogModel } from "@/utils/dialog/dialogbar";
import { imageDialog } from "@/utils/imageDialog/imageDialog";
export const mutations: MutationTree<UiState> = {
  appLoaded(state) {
    state.loading = false;
  },
  setSnack: (state, val: snackBarModel) => {
    state.snackBar = val;
  },
  stopSnack: (state) => {
    state.snackBar.Active = false;
  },
  setDialog: (state, val: dialogModel) => {
    state.dialog = val;
  },
  stopDialog: (state) => {
    state.dialog.Active = false;
  },
  setImageDilaog: (state, val: imageDialog) => {
    state.imagePopUp = val;
  },
  stopImageDialog: (state) => {
    state.imagePopUp.Active = false;
  },
  respondModal(state, payload) {
    state.respondModal = payload.status;
    state.respondModalUserId = payload.id;
  },
};
