import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { VehicleSchema } from "@/components/formikSchemas/YupSchema";

import { useApi } from "@/services/useApi";
import Grid from "@mui/material/Grid/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
type container = {
  id: number;
  code: string;
};
type handleResetFuc = (a: any) => void;
type FormProps = {
  data: any;
  onSubmit: ({}, handleReset: handleResetFuc) => void;
};
function VehicleForm({ data, onSubmit }: FormProps) {
  const { All } = useApi({ api: "container" });
  const { data: containers, error, isLoading } = All();
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
    validationSchema: VehicleSchema,
    initialValues: data
      ? data
      : {
          make: "",
          model: "",
          year: "",
          color: "",
          containerId: "",
          registrationNumber: "",
        },

    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values, handleReset);
    },
  });
  if (isLoading) {
    return "loading...";
  }
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="Container">Container</InputLabel>
                <Select
                  error={
                    touched["containerId"] && errors["containerId"]
                      ? true
                      : false
                  }
                  labelId="Container"
                  id="Container"
                  name="containerId"
                  label="Container"
                  value={values?.containerId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    touched["containerId"] && errors["containerId"]
                      ? errors["containerId"]
                      : ""
                  }
                >
                  {containers &&
                    containers.map((container: container) => (
                      <MenuItem value={container.id}>{container.code}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <TextField
                error={touched["make"] && errors["make"] ? true : false}
                id="make"
                label="Make (Company)"
                type="text"
                name="make"
                value={values.make}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["make"] && errors["make"] ? errors["make"] : ""
                }
                fullWidth
              />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <TextField
                error={touched["model"] && errors["model"] ? true : false}
                id="model"
                label="Vehicle Model"
                type="text"
                name="model"
                value={values.model}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["model"] && errors["model"] ? errors["model"] : ""
                }
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <TextField
                error={touched["year"] && errors["year"] ? true : false}
                id="year"
                label="Production Year"
                type="number"
                name="year"
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["year"] && errors["year"] ? errors["year"] : ""
                }
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <TextField
                error={touched["color"] && errors["color"] ? true : false}
                id="color"
                label="Vehicle Color"
                type="text"
                name="color"
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["color"] && errors["color"] ? errors["color"] : ""
                }
                fullWidth
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <TextField
                error={
                  touched["registrationNumber"] && errors["registrationNumber"]
                    ? true
                    : false
                }
                id="registrationNumber"
                label="Registration Number"
                type="text"
                name="registrationNumber"
                value={values.registrationNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched["registrationNumber"] && errors["registrationNumber"]
                    ? errors["registrationNumber"]
                    : ""
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

export default VehicleForm;
