import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { fetchUsers, filtersSet } from "../store/users-slice";
import { filterArray } from "@/utils/filter-array";
import { UserFilters } from "@/types/api";

export function useFilteredUsers() {
  const dispatch = useAppDispatch();
  const { list, loading, filters, error } = useAppSelector(
    (state) => state.users,
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = filterArray(list, filters);

  const isLoading = loading === "pending";
  const isError = loading === "failed";

  return {
    filteredUsers,
    isLoading,
    isError,
    errorMessage: error,
    filters,
    setFilters: (filters: UserFilters) => dispatch(filtersSet(filters)),
  };
}
