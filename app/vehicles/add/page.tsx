"use client";
import React from "react";
import VehicleForm from "@/components/forms/VehicleForm";
import { useApi } from "@/services/useApi";
import Container from "@mui/material/Container/Container";

function page() {
  const { Add } = useApi({ api: "vehicle" });
  const onSubmit = (values: any, handleReset: any) => {
    Add(values, handleReset);
  };
  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <VehicleForm onSubmit={onSubmit} data={{}} />
      </Container>
    </div>
  );
}

export default page;
