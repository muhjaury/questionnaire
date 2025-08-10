"use client";

import { Ads, Card } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SAD from "./../../assets/img/sad.png";
import SMILE from "./../../assets/img/smile.png";
import { Img } from "./MiniResult.style";

function MiniResult() {
  const [miniList, setMiniList] = useState<string[]>([]);
  const [displayAds1, setDisplayAds1] = useState(true);

  const dataFromRedux = useSelector((state: any) => state.data);

  useEffect(() => {
    let data = [
      dataFromRedux?.aResult,
      dataFromRedux?.bResult,
      dataFromRedux?.dResult,
      dataFromRedux?.eResult,
      dataFromRedux?.fResult,
      dataFromRedux?.gResult,
      dataFromRedux?.hResult,
      dataFromRedux?.lResult,
      dataFromRedux?.mResult,
      dataFromRedux?.nResult,
      dataFromRedux?.iResult,
    ].filter((i) => i);
    if (data.includes("Agorafobia dengan Gangguan Panik")) {
      data = data.filter((i) => i !== "Agorafobia");
    }
    setMiniList(data);
  }, [
    dataFromRedux?.aResult,
    dataFromRedux?.bResult,
    dataFromRedux?.dResult,
    dataFromRedux?.eResult,
    dataFromRedux?.fResult,
    dataFromRedux?.gResult,
    dataFromRedux?.hResult,
    dataFromRedux?.lResult,
    dataFromRedux?.mResult,
    dataFromRedux?.nResult,
    dataFromRedux?.iResult,
  ]);

  return (
    <CoreLayout>
      <Card>
        <div className="flex flex-col gap-4 items-center">
          <Img alt="result" src={miniList?.length === 0 ? SMILE : SAD} />
          <p className="text-center font-bold text-2xl md:text-4xl mb-2">
            Hasil
          </p>
          <p className="text-center text-lg md:text-xl mb-2">
            {miniList?.length === 0
              ? "Selamat! Senang sekali mengetahui kamu tidak mengidap kondisi spesifik"
              : "Anda kemungkinan spesifik mengidap kondisi dibawah ini:"}
          </p>
          {miniList?.length > 0 && (
            <ul className="list-disc pl-4">
              {miniList.map((item, index) => (
                <li key={index} className="text-lg md:text-xl md:mb-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {miniList?.length > 0 && displayAds1 && (
            <Ads
              title="Cara Efektif Menjaga Kesehatan Mental"
              description="Berikut adalah beberapa tips yang bisa dilakukan dalam memperbaiki kesehatan jiwa Anda:"
              onClose={() => setDisplayAds1(false)}
              onOpen={() => window.open(urls.TIPS)}
            />
          )}
        </div>
      </Card>
    </CoreLayout>
  );
}

export default MiniResult;
