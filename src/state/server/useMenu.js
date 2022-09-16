import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useMenu(id) {
  const result = useQuery(["menus", id], () =>
    axios.get(`/api/menus/${id}`).then(({ data }) => data.menu)
  );
  return [result.data, result];
}
