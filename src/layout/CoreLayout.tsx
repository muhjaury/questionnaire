import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CoreLayout({ ...props }: any) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <div className="py-8 px-4 md:py-8 md:px-32 flex flex-col justify-center items-center min-h-screen">
      {props.children}
    </div>
  );
}

export default CoreLayout;
