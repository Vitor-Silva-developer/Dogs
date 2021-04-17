import React from "react";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please, Enter a valid email address",
  },
  number: {
    regex: /^\d+$/,
    message: 'Please use only numbers'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if(error) validateField(target.value);
    setValue(target.value);
  }

  function validateField(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError(`This field can't be empty!`);
      return false;
    }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message);
        return false;
    } else{
        setError(null);
        return true;
    }
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validateField: () => validateField(value),
    onBlur: () => validateField(value)
  };
};

export default useForm;
