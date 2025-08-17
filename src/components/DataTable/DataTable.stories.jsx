import DataTable from "./DataTable";

const sampleData = [
  { name: "Santosh Faltankar", age: 28, role: "Developer" },
  { name: "pankaj Umale", age: 34, role: "Front End Developer" },
  { name: "vishal Nigam", age: 22, role: "Intern" },
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
