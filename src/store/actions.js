export const change = ({ dispatch, commit }, payload) => {
  commit('change', payload);
};
export const init = ({ dispatch, commit }) => {
  fetch('./init.json', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      commit('init', res);
    });
  // commit('init');
};

export const comet = ({ dispatch, commit }, payload) => {
  commit('comet', payload);
};
