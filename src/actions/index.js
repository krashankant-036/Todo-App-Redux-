// actions/index.js
export const increment = (number) => {
    return {
      type: 'INCREMENT',
      payload: number,
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const Loggin = () => {
    return {
      type: 'SIGN_IN',
    };
  };
  