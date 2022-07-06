import { useReducer } from "react";
const initialInputState = {
  value: "",
  isTuched: false,
};
const reduser = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTuched: state.isTuched };
  }
  if (action.type === "TUCHED") {
    return { isTuched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTuched: false };
  }
};
const useInptValidation = (validation) => {
  const [inputState, dispatchInput] = useReducer(reduser, initialInputState);
  // const [value, setValue] = useState("");
  // const [valueTuched, setValuetuched] = useState(false);

  const valueVali = validation(inputState.value);
  const inputError = inputState.isTuched && !valueVali;
  //user is clicked but value is not creact

  const inputChangeHandler = (e) => {
    dispatchInput({ type: "INPUT", value: e.target.value });
    // setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    dispatchInput({ type: "TUCHED" });
  };
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };
  return {
    value: inputState.value,
    valueVali,
    inputError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInptValidation;
