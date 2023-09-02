export const registerKeyPressHandler = () => {
  const handleKeyPress = (e: any) => {
    if (e.key === "a" || e.key === "A") {
      console.log("The A key was pressed!");
    }
  };
  window.addEventListener("keydown", handleKeyPress);

  const handleKeyRelease = (e: any) => {
    if (e.key === "a" || e.key === "A") {
      console.log("Released");
    }
  };
  window.addEventListener("keyup", handleKeyRelease);

  return () => {
    window.removeEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);
  };
};
