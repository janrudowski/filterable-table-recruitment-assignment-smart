import { useFilteredUsers } from "@/features/users/hooks/use-users";
import { Table } from "@/components/ui/table";
import { User } from "@/types/api";

export default function UsersView() {
  const { filteredUsers, isLoading, isError, errorMessage, setFilters } =
    useFilteredUsers();

  function handleFilter(header: keyof User, filterValue: string) {
    setFilters({[header]: filterValue});
  }

  if (isError) {
    return <div className="flex justify-center items-center h-screen">{errorMessage}</div>;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1000px] px-4">
        <Table headers={['name', 'username', 'email', 'phone']} rows={filteredUsers} onFilter={handleFilter} loading={isLoading} />
      </div>
    </div>
  );
}
