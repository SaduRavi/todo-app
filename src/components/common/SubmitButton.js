import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export const SubmitButton = () => {
  const { isValid, dirty, isSubmitting } = useFormikContext();

  return (
    <Button
      type="submit"
      variant="contained"
      disabled={!isValid || !dirty || isSubmitting}
      style={{
        padding: "10px 50px",
        margin: '10px 0px',
      }}
    >
      Submit
    </Button>
  );
};
