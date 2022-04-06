import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const ButtonLoading = (props) => {
  if (props.statusLoading) {
    return (
      <LoadingButton
        loading
        fullWidth
        type="submit"
        loadingIndicator={props.title}
        sx={props.sx}
        variant="contained"
      >
        {props.title}...
      </LoadingButton>
    );
  } else {
    return (
      <Button
        type="submit"
        fullWidth
        onClick={props.onClick}
        sx={props.sx}
        variant="contained"
      >
        {props.title}
      </Button>
    );
  }
};

export default ButtonLoading;
