export const showMessageDialog = (messageNodes, messageText) => {
  const { dialogNode, textNode } = messageNodes;
  textNode.innerText = messageText;
  dialogNode.showModal();
};
