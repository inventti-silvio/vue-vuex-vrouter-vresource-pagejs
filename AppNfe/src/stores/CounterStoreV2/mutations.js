export const increment = state => {
  state.count++;
  state.history.push('increment');
};

export const decrement = state => {
  state.count--;
  state.history.push('decrement');
};

export const revert = state => {
  let lastCommit = state.history.pop();
  switch (lastCommit) {

    case 'increment':
      state.count--;
      break;

    case 'decrement':
      state.count++;
      break;
      
  }
};
