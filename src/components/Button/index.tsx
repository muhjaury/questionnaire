import { Btn, Wrapper } from "./button.style";
import { Button_Type } from "./button.type";

function Button({ ...props }: Button_Type) {
  return (
    <Wrapper>
      <Btn {...props}>{props.children}</Btn>
    </Wrapper>
  );
}

export default Button;
