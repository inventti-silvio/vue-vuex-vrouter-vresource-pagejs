export const byId = (id) => {
  return (el) => {
      return el.id === id;
  };
};

export const byProp = (prop, data) => {
  return (el) => {
    return el[prop] === data[prop];
  };
};
