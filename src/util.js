export function removeElement(array, index) {
  const newArr = [...array];
  newArr.forEach((item, key) => {
    if (item.id === index) {
      newArr.splice(key, 1);
    }
  });
  return newArr;
}

export function updateElement(array, index, value) {
  const newArr = [...array];
  newArr.forEach((item) => {
    if (item.id === index) {
      item.data = value;
    }
  });
  return newArr;
}
