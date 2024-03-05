export const formatColumnName = (columnName) => {
  const words = columnName.split("_");
  const formatColumnName = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return formatColumnName.join(" ");
};
