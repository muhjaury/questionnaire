import Cancel from "./../../assets/img/cancel.png";
import { Close, Description, Title, Wrapper } from "./adds.style";
import { Adds_Type } from "./adds.type";

function Adds({ onClose = () => {}, ...props }: Adds_Type) {
  return (
    <Wrapper data-aos="fade-up" data-aos-delay="1000">
      <Close alt="cancel" src={Cancel} onClick={() => onClose()} />
      {props.title && <Title>{props.title}</Title>}
      {props.description && <Description>{props.description}</Description>}
    </Wrapper>
  );
}

export default Adds;
