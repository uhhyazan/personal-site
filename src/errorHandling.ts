export const validateName = (name: string): string => {
    if (!name.trim()) {
      return "Name is required";
    }
    return "";
  };
  
  export const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Email is required";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return "Invalid email format";
    }
    return "";
  };
  
  export const validateMessage = (message: string): string => {
    if (!message.trim()) {
      return "Message is required";
    }
    return "";
  };
  