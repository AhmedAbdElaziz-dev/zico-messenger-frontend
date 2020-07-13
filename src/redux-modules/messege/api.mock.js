export const getConversationList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(conversationlist);
    }, 1000);
  });

const conversationlist = [
  {
    conversationId: { imgSrc: "img.jpg", userName: "ahmed" },
    lastMessege: "",
  },
  {
    conversationId: { imgSrc: "img.jpg", userName: "mohamed" },
    lastMessege: "",
  },
  {
    conversationId: { imgSrc: "img.jpg", userName: "mahmoud" },
    lastMessege: "",
  },
];
