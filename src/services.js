const localStorage = window.localStorage;

export default function setLocalStorage(payload) {
  localStorage.setItem('state', JSON.stringify(payload));
}
