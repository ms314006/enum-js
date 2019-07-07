const newEnum = (descriptions) => {
  if (Object.keys(descriptions).length === 0) {
    return {};
  }
  const result = {};
  Object.keys(descriptions).forEach((description) => {
    result[result[description] = descriptions[description]] = description;
  });
  return Object.freeze(result);
};

export { newEnum };
