export const initialState = {
  Step: 1,
  FormData: {
    name: "",
    email: "",
    userName: "",
    password: "",
  },
  isSubmitted: false,
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        FormData: {
          ...state.FormData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return { ...state, Step: state.Step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, Step: state.Step - 1 };

    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
