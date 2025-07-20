"use client";

import { Button, Card } from "@/components";
import { PENYAKIT } from "@/constant/variable";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SAD from "./../../assets/img/sad.png";
import SMILE from "./../../assets/img/smile.png";
import { Img } from "./SRQResult.style";
import { urls } from "@/constant/path";

function SRQResult() {
  const [srq, setSrq] = useState<string[]>([]);

  const dataFromRedux = useSelector((state: any) => state.data);

  const router = useRouter();

  useEffect(() => {
    setSrq(dataFromRedux.srq);
  }, [dataFromRedux?.srq]);

  const handleLanjutClick = () => {
    if (srq.includes(PENYAKIT.DEPRESI)) {
      router.replace(urls.MINI_1);
    } else if (srq.includes(PENYAKIT.NARKOBA)) {
      router.replace(urls.MINI_2);
    } else if (srq.includes(PENYAKIT.PSIKOSIS)) {
      router.replace(urls.MINI_3);
    } else if (srq.includes(PENYAKIT.PTSD)) {
      router.replace(urls.MINI_4);
    }
  };

  return (
    <CoreLayout>
      <Card>
        <div className="flex flex-col gap-4 items-center">
          <Img alt="result" src={srq?.length === 0 ? SMILE : SAD} />
          <p className="text-center font-bold text-2xl md:text-4xl mb-2">
            Hasil
          </p>
          <p className="text-center text-lg md:text-xl mb-2">
            {srq?.length === 0
              ? "Selamat! Senang sekali mengetahui kamu baik-baik saja dan sehat secara mental."
              : "Anda kemungkinan mengidap kondisi dibawah ini:"}
          </p>
          {srq?.length > 0 && (
            <ul className="list-disc pl-4">
              {srq.map((item, index) => (
                <li key={index} className="text-lg md:text-xl md:mb-2">
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
