export default function debounce (callback, delay) {
  let timer;
  return (...args) => { // ...args, destrutura se for passado argumentos
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null
    }, delay);
  };
}