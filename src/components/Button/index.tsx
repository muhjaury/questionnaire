import { Btn, Wrapper } from "./button.style";
import { Button_Type } from "./button.type";

function Button({ ...props }: Button_Type) {
  return (
    <Wrapper>
      <Btn className="text-base lg:text-lg" {...props}>
        {props.children}
      </Btn>
    </Wrapper>
  );
}

export default Button;
