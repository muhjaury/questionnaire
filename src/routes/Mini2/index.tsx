"use client";

import { urls } from "@/constant/path";
import { PENYAKIT } from "@/constant/variable";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Alkohol from "./alkohol";
import ZatPsikoaktif from "./zatPsikoaktif";

function Mini2() {
  const [isLDone, setIsLDone] = useState(false);
  const [isMDone, setIsMDone] = useState(false);

  const dataFromRedux = useSelector((state: any) => state.data);

  const router = useRouter();

  useEffect(() => {
    if (dataFromRedux?.srq?.length > 0 && isMDone) {
      if (dataFromRedux.srq.includes(PENYAKIT.PSIKOSIS)) {
        router.replace(urls.MINI_3);
      } else if (dataFromRedux.srq.includes(PENYAKIT.PTSD)) {
        router.replace(urls.MINI_4);
      }
    }
  }, [dataFromRedux?.srq, isMDone]);

  return (
    <CoreLayout>
      {!isLDone && <Alkohol setIsDone={setIsLDone} />}
      {isLDone && <ZatPsikoaktif setIsDone={setIsMDone} />}
    </CoreLayout>
  );
}

export default Mini2;
