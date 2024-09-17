import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";
import { useState } from "react";
import { filterArray } from "@/utils/filter-array";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const ExampleTable = () => {
  const [rows, setRows] = useState([
    { name: "John Doe", age: "30", city: "New York" },
    { name: "Jane Smith", age: "25", city: "London" },
    { name: "Bob Johnson", age: "35", city: "Paris" },
  ]);
  const headers: (keyof (typeof rows)[number])[] = ["name", "age", "city"];

  return (
    <Table
      headers={headers}
      rows={rows}
      onFilter={(header, value) => filterArray(rows, { [header]: value })}
    />
  );
};

export const Default: Story = {
  render: () => <ExampleTable />,
};

export const Loading: Story = {
  render: () => (
    <Table
      headers={["name", "age", "city"]}
      rows={[]}
      onFilter={() => {}}
      loading={true}
    />
  ),
};

export const NoResults: Story = {
  render: () => (
    <Table headers={["name", "age", "city"]} rows={[]} onFilter={() => {}} />
  ),
};
