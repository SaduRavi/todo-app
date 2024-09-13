import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function ConfirmationBox({
  boxLabel,
  viewBox,
  handleClose,
  itemSelected,
  confirmOperation,
}) {
  if (itemSelected == null) return;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 200,
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={viewBox}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: boxLabel === "DELETE" ? "#d32f2f" : "#0288d1",
          }}
        >
          {boxLabel === "DELETE"
            ? "Confirm! Delete Item"
            : "Confirm! Update Item"}
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{
            marginBottom: "20px",
            color: "#555",
            fontSize: "0.95rem",
            fontStyle: "italic",
          }}
        >
          Item Title: {itemSelected.title}
        </Typography>

        <Button
          sx={{
            backgroundColor: boxLabel === "DELETE" ? "#d32f2f" : "#0288d1",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "6px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: boxLabel === "DELETE" ? "#c62828" : "#0277bd",
            },
          }}
          variant="contained"
          onClick={confirmOperation}
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
}
