import Cancel from "./../../assets/img/cancel.png";
import { Close, Description, Title, Wrapper } from "./adds.style";
import { Adds_Type } from "./adds.type";

function Adds({ onClose = () => {}, onOpen = () => {}, ...props }: Adds_Type) {
  return (
    <Wrapper data-aos="fade-up" data-aos-delay="1000">
      <Close alt="cancel" src={Cancel} onClick={() => onClose()} />
      {props.title && <Title onClick={() => onOpen()}>{props.title}</Title>}
      {props.description && (
        <Description onClick={() => onOpen()}>{props.description}</Description>
      )}
    </Wrapper>
  );
}

export default Adds;
