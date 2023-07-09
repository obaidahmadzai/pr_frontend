"use client";
import { useApi } from "@/services/useApi";
import React from "react";
import Container from "@mui/material/Container/Container";
import ContainerForm from "@/components/forms/ContainerForm";
function page({ params }: { params: any }) {
  const { Get, Update } = useApi({ api: "container" });
  const { data, error, isLoading } = Get(params.id);
  const onSubmit = (values: any) => {
    Update(values, params.id);
  };
  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <ContainerForm onSubmit={onSubmit} data={data} />
      </Container>
    </div>
  );
}

export default page;
