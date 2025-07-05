import { Wrapper } from "./card.style";

function Card({ ...props }: any) {
  return (
    <Wrapper
      className="bg-white py-8 px-4 md:p-8 w-full max-w-300 mb-4"
      data-aos="fade-up"
    >
      {props.children}
    </Wrapper>
  );
}

export default Card;
