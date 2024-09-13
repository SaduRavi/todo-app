import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SubmitButton } from "../common/SubmitButton";
import { TextInput } from "../common/TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ValidationSchema } from "../../validation/ValidationSchema";

export default function AddTodoDialog({
  viewDialog,
  handleClose,
  confirmAddItem,
  selectedItem,
}) {
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
      open={viewDialog}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Todo
        </Typography>

        <Formik
          initialValues={{
            id: selectedItem ? selectedItem.id : "",
            itemTitle: selectedItem ? selectedItem.title : "",
            itemDescription: selectedItem ? selectedItem.description : "",
          }}
          validationSchema={Yup.object({
            itemTitle: ValidationSchema.itemTitle,
            itemDescription: ValidationSchema.itemDescription,
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              confirmAddItem(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form
            style={{
              textAlign: "center",
            }}
          >
            <TextInput label="Item Title" name="itemTitle" type="text" />
            <TextInput
              label="Item Description"
              name="itemDescription"
              type="text"
              multiline
              rows={4}
            />
            <SubmitButton />
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
}
