export const increment = ctx => {
  ctx.commit('increment');
  ctx.commit('saveHistory', 'increment');
};
export const decrement = ctx => {
  ctx.commit('decrement');
  ctx.commit('saveHistory', 'decrement');
};

//Object destructuring
export const incrementAsync = ({commit}) => setTimeout(() => commit('increment'), 1000);
export const decrementAsync = ({commit}) => setTimeout(() => commit('decrement'), 1000);

export const alert = ctx => setTimeout(() => alert(ctx.state.count), 1000);

export const incrementEven = ctx => {
  if(ctx.state.count % 2 === 0) {
      ctx.commit('increment');
  }
};

//Object destructuring
export const incrementOdd = ({commit, state}) => {
  if(state.count % 2 !== 0) {
      commit('increment');
  }
};

export const revert = ({commit, state}) => {
  let lastCommit = state.history.pop();
  switch (lastCommit) {

    case 'increment':
      commit('decrement');
      break;

    case 'decrement':
      commit('increment');
      break;

  }
};
