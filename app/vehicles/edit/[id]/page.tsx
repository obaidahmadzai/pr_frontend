"use client";
import { useApi } from "@/services/useApi";
import React from "react";
import Container from "@mui/material/Container/Container";
import VehicleForm from "@/components/forms/VehicleForm";
function page({ params }: { params: any }) {
  const { Get, Update } = useApi({ api: "vehicle" });
  const { data, error, isLoading } = Get(params.id);
  const onSubmit = (values: any) => {
    Update(values, params.id);
  };
  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <VehicleForm onSubmit={onSubmit} data={data} />
      </Container>
    </div>
  );
}

export default page;
