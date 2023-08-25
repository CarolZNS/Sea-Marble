import Button from "../components/Button";
import Box from "../components/Box";
import { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const FORM_VALUE = "form-value";
const ADD_VALUE = "add-value";
const RESET = "reset";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case FORM_VALUE:
      return {
        ...state,
        formValue: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
        formValue: 0,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    formValue: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE, payload: state.formValue });
  };
  const handleChange = (e) => {
    dispatch({ type: FORM_VALUE, payload: parseInt(e.target.value) || 0 });
  };
  const clearInput = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_VALUE, payload: 0 });
  };
  const resetCount = () => {
    dispatch({ type: RESET });
  };

  return (
    <Box>
      <div className="w-full bg-white border border-cyan-500 px-3 py-1 rounded mb-3">
        {state.count || 0}
      </div>
      <div className="flex gap-2">
        <Button primary outline onClick={decrement} className="px-7">
          -1
        </Button>
        <Button primary outline onClick={increment} className="px-7">
          +1
        </Button>
        <Button danger outline onClick={resetCount}>
          Reset Count
        </Button>
      </div>
      <form className="flex flex-col justify-between mt-2">
        <label className="text-cyan-500 font-bold">Add value</label>
        <input
          type="number"
          onChange={handleChange}
          value={state.formValue || ""}
          className="px-3 py-1 rounded border border-cyan-500 w-min"
        />
        <div className="flex gap-2 mt-2">
          <Button primary outline type="submit" onClick={handleSubmit}>
            Add value
          </Button>
          <Button warning outline type="reset" onClick={clearInput}>
            Clear
          </Button>
        </div>
      </form>
    </Box>
  );
}
