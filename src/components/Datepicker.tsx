import { useState } from "react";
import Datepicker, {
  type DateType,
  type DateValueType,
} from "react-tailwindcss-datepicker";

interface DateValue {
  startDate: DateType;
  endDate: DateType;
}

const Datepicking = () => {
  const [value, setValue] = useState<DateValue>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(11)),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    if (newValue != undefined) {
      setValue({
        startDate: newValue.startDate,
        endDate: newValue.endDate,
      });
    }
  };

  return <Datepicker value={value} onChange={handleValueChange} />;
};

export default Datepicking;
