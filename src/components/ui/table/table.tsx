import React, { useState } from "react";
import { Input } from "../input";
import { Spinner } from "@/components/ui/spinner";

interface TableProps<T extends Record<string, string>> {
  headers: (keyof T)[];
  rows: T[];
  onFilter: (header: keyof T, filterValue: string) => void;
  loading?: boolean;
}

const Table = <T extends Record<string, string>>({
  headers,
  rows,
  onFilter,
  loading,
}: TableProps<T>) => {
  const [filters, setFilters] = useState<Record<keyof T, string>>(() => {
    const filterKeys: Record<keyof T, string> = {} as Record<keyof T, string>;
    headers.forEach((header) => {
      filterKeys[header] = "";
    });
    return filterKeys;
  });

  function handleInput(header: keyof T, value: string) {
    setFilters({ ...filters, [header]: value });
    onFilter(header, value);
  }

  return (
    <div className="overflow-x-auto w-full shadow-md rounded-lg bg-white dark:bg-gray-900">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 tracking-wider"
              >
                <Input
                  data-test={`search-input-${String(header)}`}
                  inputSize="sm"
                  label={
                    String((header as string)[0]).toUpperCase() +
                    String(header).slice(1)
                  }
                  value={filters[header]}
                  onInput={(e) =>
                    handleInput(header, (e.target as HTMLInputElement).value)
                  }
                  disabled={loading}
                  clear
                  onClear={() => handleInput(header, "")}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {loading ? (
            <tr>
              <td colSpan={headers.length} className="px-6 py-4">
                <div className="flex justify-center items-center h-16">
                  <Spinner />
                </div>
              </td>
            </tr>
          ) : rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr
                data-test={`table-row-${rowIndex}`}
                key={rowIndex}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {headers.map((header, headerIndex) => (
                  <td
                    data-test={`table-cell-${String(header)}-${rowIndex}`}
                    key={headerIndex}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      {row[header]}
                    </div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                data-test="table-no-results"
                colSpan={headers.length}
                className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
              >
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
