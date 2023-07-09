import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ContainerSchema } from "@/components/formikSchemas/YupSchema";
import Grid from "@mui/material/Grid/Grid";
import { Button } from "@mui/material";
type FormProps = {
  data: any;
  onSubmit: ({}) => void;
};
function ContainerForm({ data, onSubmit }: FormProps) {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleReset,
  } = useFormik({
    validationSchema: ContainerSchema,
    initialValues: data
      ? data
      : {
          code: "",
        },

    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <TextField
                error={touched["code"] && errors["code"] ? true : false}
                id="code"
                label="code (ex: Container 1234 )"
                type="text"
                name="code"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["code"] && errors["code"] ? errors["code"] : ""
                }
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ marginTop: "30px" }}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default ContainerForm;
