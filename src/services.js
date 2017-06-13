const localStorage = window.localStorage;

export default function setLocalStorage(payload) {
  localStorage.setItem(payload.name, JSON.stringify(payload.data));
}
