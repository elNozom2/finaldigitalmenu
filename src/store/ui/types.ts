import { snackBarModel } from "@/utils/snack/snackbar.model";
import { dialogModel } from "@/utils/dialog/dialogbar";
import { imageDialog } from "@/utils/imageDialog/imageDialog";
export interface UiState {
  loading: boolean;
  dialog: dialogModel;
  snackBar: snackBarModel;
  respondModal: boolean;
  respondModalUserId: number;
  imagePopUp: imageDialog;
}
