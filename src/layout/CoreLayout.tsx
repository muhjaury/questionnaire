import Header from "@/components/Header";
import { urls } from "@/constant/path";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./coreLayout.style";

function CoreLayout({ ...props }: any) {
  const dataFromRedux = useSelector((state: any) => state.data);

  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    if (!dataFromRedux.start) {
      router.push(urls.MAIN);
    }
  }, [dataFromRedux]);

  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
}

export default CoreLayout;
