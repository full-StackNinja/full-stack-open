const Message = ({ message, status }) => {
   if (!message) return "";
   return (
      <div className={status === "success" ? "msg" : "errMsg"}>{message}</div>
   );
};

export default Message;
