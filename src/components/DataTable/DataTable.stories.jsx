import DataTable from "./DataTable";

const sampleData = [
  { name: "John Doe", age: 28, role: "Developer" },
  { name: "Jane Smith", age: 34, role: "Designer" },
  { name: "Alice Brown", age: 22, role: "Intern" },
];

const sampleColumns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "role", label: "Role" },
];

export default {
  title: "Components/DataTable",
  component: DataTable,
};

export const Default = {
  args: {
    data: sampleData,
    columns: sampleColumns,
  },
};

export const Selectable = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    selectable: true,
  },
};

export const Loading = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: true,
  },
};

export const Empty = {
  args: {
    data: [],
    columns: sampleColumns,
  },
};
