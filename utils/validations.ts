export const validatePhone = (phone: string) => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};