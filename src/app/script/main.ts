let count = 0;

const handleKeyPress = (e: any) => {
  if (e.key === "s" || e.key === "S") {
    console.log("The A key was pressed!123" + count);
    count++;
  }
};

window.addEventListener("keydown", handleKeyPress);
