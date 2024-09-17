import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserFilters } from "@/types/api";
import { api } from "@/libs/api-client";

interface UsersState {
  list: User[];
  filters: UserFilters;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return (await api.get<User[]>("/users")).data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    filters: {},
    loading: "idle",
    error: "",
  } satisfies UsersState as UsersState,
  reducers: {
    filtersSet(state, action: PayloadAction<UserFilters>) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.list = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error?.message || "something went wrong";
    });
  },
});

export const { filtersSet } = usersSlice.actions;

export default usersSlice.reducer;
