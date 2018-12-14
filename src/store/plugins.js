export default function parentActions() {
  return (store) => {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'change') {
        sendMessage(mutation.payload);
      }
    });
  };
}
