import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Wrapper } from "./coreLayout.style";

function CoreLayout({ ...props }: any) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
}

export default CoreLayout;
