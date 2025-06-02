export type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    // ... other fields
  };
  
  export type ApiResponse<T> = {
    data?: T;
    error?: {
      message: string;
      code: number;
    };
    success: boolean;
  };