import { ToggleRadio_Type } from "./toggleRadio.type";

function ToggleRadio({
  selectedValue = "Label 1",
  setFieldValue = () => {},
  firstValue = "Label 1",
  secondValue = "Label 2",
}: ToggleRadio_Type) {
  const handleOnClick = (value: string) => {
    setFieldValue(value);
  };

  return (
    <div className="flex gap-4 md:gap-6">
      <div
        className="flex gap-2 md:gap-4 cursor-pointer"
        onClick={() => handleOnClick(firstValue)}
      >
        <div
          className={`
            w-6 h-6 rounded-full border-2 
            flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${
              selectedValue === firstValue
                ? "border-gray-600 bg-white"
                : "border-gray-300 bg-white"
            }
          `}
        >
          {selectedValue === firstValue && (
            <div className="w-4 h-4 rounded-full bg-gray-600"></div>
          )}
        </div>
        <div className="md:text-xl">{firstValue}</div>
      </div>
      <div
        className="flex gap-2 md:gap-4 cursor-pointer"
        onClick={() => handleOnClick(secondValue)}
      >
        <div
          className={`
            w-6 h-6 rounded-full border-2 
            flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${
              selectedValue === secondValue
                ? "border-gray-600 bg-white"
                : "border-gray-300 bg-white"
            }
          `}
        >
          {selectedValue === secondValue && (
            <div className="w-4 h-4 rounded-full bg-gray-600"></div>
          )}
        </div>
        <div className="md:text-xl">{secondValue}</div>
      </div>
    </div>
  );
}

export default ToggleRadio;
