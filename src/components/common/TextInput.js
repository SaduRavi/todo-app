import { TextField } from "@mui/material";
import { useField } from "formik";

export const TextInput = ({ label, type, multiline=false, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        id={label}
        type={type}
        label={label}
        margin="normal"
        size="small"
        multiline = {multiline}
        rows={multiline ? 4 : 0}
        fullWidth
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : ""}
        {...field}
      />
    </>
  );
};
