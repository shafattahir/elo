export const Validators = {
    email: (email: string): boolean => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    password: (password: string): boolean => {
      return password.length >= 8;
    },
    // Add more validators
  };