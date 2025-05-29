import { ToggleRadio } from "..";
import { Question_Type } from "./question.type";

function Question({
  number = 1,
  children = "Pertanyaan",
  selectedValue = "Label 1",
  setFieldValue = () => {},
  firstValue = "Label 1",
  secondValue = "Label 2",
}: Question_Type) {
  return (
    <div className="flex justify-start gap-4 mb-4">
      <div className="md:text-xl">{number}.</div>
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="md:text-xl">{children}</div>
        <ToggleRadio
          selectedValue={selectedValue}
          setFieldValue={setFieldValue}
          firstValue={firstValue}
          secondValue={secondValue}
        />
      </div>
    </div>
  );
}

export default Question;
