export const increment = state => {
  state.count++;
};

export const decrement = state => {
  state.count--;
};

export const saveHistory = (state, payload) => {
  state.history.push(payload);
};
