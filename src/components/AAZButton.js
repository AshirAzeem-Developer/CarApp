import { Button } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function AAZButton(props) {
  const { label, onClick, classname, disabled, startIcon, endIcon, loading } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        variant="contained"
        disabled={loading || disabled}
        className={classname}
      >
        {loading ? <CircularProgress /> : label}
      </Button>
    </>
  );
}
export default AAZButton;
