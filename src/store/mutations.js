export const change = (state, payload) => {
  const keys = Object.keys(payload).filter(key => key !== 'id');
  const id = payload.id;
  if (keys.length === 0) {
    console.log('not keys');
  }
  keys.forEach((key) => {
    state.list[id][key] = payload[key];
  });
};

export const init = (state, res) => {
  state.list = res
}

export const comet = (state, payload) => {
  const keys = Object.keys(payload).filter(key => key !== 'id');
  const id = payload.id;
  if (keys.length === 0) {
    console.log('not keys');
  }
  keys.forEach((key) => {
    state.list[id][key] = payload[key];
  });
};
