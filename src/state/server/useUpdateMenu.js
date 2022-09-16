import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

export default function useUpdateMenu() {
  const mutation = useMutation({
    mutationFn: (partial) => {
      return axios
        .put(`/api/menus/${partial.id}`, partial)
        .then(({ data }) => data);
    },
    onMutate: async (partial) => {
      const id = partial.id;
      const prevData = queryClient.getQueryData(["menus", id]);
      queryClient.setQueryData(["menus", id], (prev) => ({
        ...prev,
        ...partial,
      }));
      return { prevData };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["histories", context.prevData.id]);
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(
        ["menus", context.prevData.id],
        () => context.prevData
      );
    },
    retry: 1,
  });

  return [mutation.mutate, mutation];
}
