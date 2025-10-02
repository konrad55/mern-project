import React, { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";
import type { FormInputProps } from "../../../types";

interface InputState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

type InputAction =
  | {
      type: "CHANGE";
      val: string;
      validators: Array<{ type: string; val?: number }>;
    }
  | { type: "TOUCH" };

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input: React.FC<FormInputProps> = ({
  id,
  element = "input",
  type = "text",
  placeholder,
  rows = 3,
  label,
  errorText,
  validators,
  onInput,
  initialValue = "",
  initialValid = false,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isTouched: false,
    isValid: initialValid,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elementComponent =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    ) : (
      <textarea
        id={id}
        rows={rows}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    );

  return (
    <div
      className={`mb-4 ${
        !inputState.isValid && inputState.isTouched ? "text-red-600" : ""
      }`}
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {elementComponent}
      {!inputState.isValid && inputState.isTouched && (
        <p className="mt-1 text-sm text-red-600">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
