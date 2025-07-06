const button = document.getElementById("messageButton");

const messageDisplay = document.getElementById("messageDisplay");

const getMessage = async () => {
  try {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const respJson = await resp.json();
    return respJson.slip.advice;
  } catch (error) {
    console.error(error);
  }
};

button.addEventListener("click", async () => {
  const message = await getMessage();

  messageDisplay.textContent = message;

  messageDisplay.style.color = "#003e80";
  messageDisplay.style.fontWeight = "bold";
  messageDisplay.style.marginTop = "15px";
  messageDisplay.style.fontSize = "1.1em";
});
