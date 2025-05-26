import { ToggleRadio } from "..";
import { Question } from "./question.type";

function Question({
  number = 1,
  children = "Pertanyaan",
  selectedValue = "Label 1",
  setFieldValue = () => {},
  firstValue = "Label 1",
  secondValue = "Label 2",
}: Question) {
  return (
    <div className="flex justify-start gap-4">
      <div className="lg:text-xl">{number}.</div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="lg:text-xl">{children}</div>
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
