const initialState = {
  token :"",
};

const token = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOKEN':
      return { todos:payload };



    default:
      return state;
  }
};

export default token;


export const setToken = (token) => {

  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
