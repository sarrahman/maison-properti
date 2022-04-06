import { Alert, AlertTitle } from "@mui/material";

const AlertComp = (props) => {
  if (props.status) {
    return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {props.text}
      </Alert>
    );
  }

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.text}
    </Alert>
  );
};

export default AlertComp;
