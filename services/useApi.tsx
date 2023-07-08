"use client";
import axios from "@/lib/axios";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";

export interface ApiResponse<T> {
  data: T;
  error: any;
  isLoading: boolean;
}

export const useApi = ({ api }: { api: string }) => {
  const All = (): ApiResponse<any> => {
    const { data, error, isLoading } = useSWR(api, () =>
      axios.get(api).then((res) => res.data)
    );
    return { data, error, isLoading };
  };

  const Add = ({
    data,
    handleReset,
  }: {
    data: any;
    handleReset: () => void;
  }) => {
    axios
      .post(api, data)
      .then((res) => {
        toast.info("Form submitted successfully!");
        handleReset();
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        error.response.data.errors &&
          Object.values(error.response.data.errors).forEach((value: any) => {
            value.forEach((message: string) => {
              toast.warning(message);
            });
          });
      });
  };
  const Get = (id: number): ApiResponse<any> => {
    const { data, error, isLoading } = useSWR(`${api}/${id}`, () =>
      axios.get(`${api}/${id}`).then((res) => res.data)
    );
    return { data, error, isLoading };
  };

  const Update = ({
    data,
    id,
    handleReset,
  }: {
    data: any;
    id: number;
    handleReset: () => void;
  }) => {
    axios
      .post(`${api}/${id && id}`, data)
      .then((res) => {
        toast.info("Data updated successfully!");
        handleReset();
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        error.response.data.errors &&
          Object.values(error.response.data.errors).forEach((value: any) => {
            value.forEach((message: string) => {
              toast.warning(message);
            });
          });
      });
  };
  const Delete = async (id: number) => {
    try {
      await axios.delete(`${api}/${id}`);
      toast.info("Item Deleted successfully!");
      await mutate(api);
    } catch (error) {
      //   error.response?.data.errors &&
      //     Object.values(error.response.data.errors).forEach((value: any) => {
      //       value.forEach((message: string) => {
      //         toast.warning(message);
      //       });
      //     });
    }
  };
  //   const convertToFormData = (data: any) => {
  //     const formData = new FormData();
  //     const keys = Object.keys(data);
  //     const values = Object.values(data);
  //     keys.map((key, index) => {
  //         formData.append(key, values[index] :);
  //     });

  //     return formData;
  //   };
  return {
    Add,
    Get,
    Update,
    Delete,
    All,
  };
};
