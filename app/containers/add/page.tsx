"use client";
import React from "react";
import ContainerForm from "@/components/forms/ContainerForm";
import { useApi } from "@/services/useApi";
import Container from "@mui/material/Container/Container";

function page() {
  const { Add } = useApi({ api: "container" });
  const onSubmit = (values: any) => {
    Add(values);
  };
  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <ContainerForm onSubmit={onSubmit} data={{}} />
      </Container>
    </div>
  );
}

export default page;
