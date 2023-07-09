import * as Yup from "yup";

export const VehicleSchema = Yup.object({
  make: Yup.string().min(2).required(),
  model: Yup.string().min(2).required(),
  color: Yup.string().min(2).required(),
  containerId: Yup.number().nonNullable(),
  registrationNumber: Yup.string().min(2).required(),
});
export const ContainerSchema = Yup.object({
  code: Yup.string().min(2).required(),
});
