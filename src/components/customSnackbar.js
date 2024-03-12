import { enqueueSnackbar, closeSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const customAction = (key) => {
    return (
        <IconButton
            color="inherit"
            onClick={() => {
                closeSnackbar(key);
            }}
        >
            <CloseIcon />
        </IconButton>
    );
};
const CustomSnackbar = (message, type) => {
    if (type.variant === "error" || type.variant === "warning") {
        enqueueSnackbar(message, {
            variant: type.variant,
            action: (key) => customAction(key),
            autoHideDuration: null,
        });
    } else {
        enqueueSnackbar(message, {
            variant: type.variant,
        });
    }
};

export default CustomSnackbar;
