export const loadState = () => {
  try {
    const savedState = localStorage.getItem("state");
    if (!savedState) {
      return undefined;
    } else {
      return JSON.parse(savedState)
    };
  } catch(err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem("state", stateToSave);
  } catch(err) {
    console.log(err);
  }
}