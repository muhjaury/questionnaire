import Cancel from "./../../assets/img/cancel.png";
import { Close, Description, Title, Wrapper } from "./ads.style";
import { Ads_Type } from "./ads.type";

function Ads({ onClose = () => {}, onOpen = () => {}, ...props }: Ads_Type) {
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

export default Ads;
