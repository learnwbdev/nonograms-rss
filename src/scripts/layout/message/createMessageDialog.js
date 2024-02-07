import { gameAppNode } from "../getGameAppNode";

export const createMessageDialog = () => {
  const messageDialog = document.createElement("dialog");
  messageDialog.classList.add("message");
  gameAppNode.appendChild(messageDialog);

  const msgText = document.createElement("div");
  msgText.classList.add("message__text");
  messageDialog.appendChild(msgText);

  const msgCloseBtn = document.createElement("button");
  msgCloseBtn.classList.add("message__close", "btn");
  msgCloseBtn.type = "button";
  msgCloseBtn.innerText = "Close";
  messageDialog.appendChild(msgCloseBtn);

  msgCloseBtn.addEventListener("click", () => {
    messageDialog.close();
  });

  return { messageDialog, msgText };
};
