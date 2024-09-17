import { useState } from "react";

export const useSpin = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handles = {
    onPlusClick: () => setValue((parseInt(value) + 1).toString()),
    onMinusClick: () => setValue((parseInt(value) - 1).toString()),
    onInputChange: (v) => setValue(v),
  };

  return { value, handles };
};
