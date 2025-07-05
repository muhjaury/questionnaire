"use client";

import { Button, Card } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SAD from "./../../assets/img/sad.png";
import SMILE from "./../../assets/img/smile.png";
import { Img } from "./SRQResult.style";

function SRQResult() {
  const [srq, setSrq] = useState<number[]>([]);

  const dataFromRedux = useSelector((state: any) => state.data);

  useEffect(() => {
    setSrq(dataFromRedux.srq);
  }, []);

  const handleLanjutClick = () => {
    console.log("Lanjut");
  };

  return (
    <CoreLayout>
      <Card>
        <div className="flex flex-col gap-4 items-center">
          <Img alt="result" src={srq?.length === 0 ? SMILE : SAD} />
          <p className="text-center font-bold text-2xl md:text-5xl mb-8">
            Hasil
          </p>
          <p className="text-center text-xl md:text-4xl mb-8">
            {srq?.length === 0
              ? "Selamat! Senang sekali mengetahui kamu baik-baik saja dan sehat secara mental."
              : "Anda kemungkinan mengidap kondisi dibawah ini:"}
          </p>
          {srq?.length > 0 && (
            <ul className="list-disc pl-4">
              {srq.map((item, index) => (
                <li key={index} className="text-lg md:text-3xl md:mb-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
      {srq?.length > 0 && (
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutClick}>Lanjut</Button>
        </div>
      )}
    </CoreLayout>
  );
}

export default SRQResult;
