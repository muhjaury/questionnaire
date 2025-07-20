"use client";

import { urls } from "@/constant/path";
import { PENYAKIT } from "@/constant/variable";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Agorafobia from "./agorafobia";
import Distimia from "./distimia";
import EpisodeDepresif from "./episodeDepresif";
import GangguanAnxietasMenyeluruh from "./gangguanAnxietasMenyeluruh";
import GangguanObsesifKompulsif from "./gangguanObsesifKompulsif";
import GangguanPanik from "./gangguanPanik";
import Sosialfobia from "./sosialfobia";

function Mini1() {
  const [isADone, setIsADone] = useState(false);
  const [isBDone, setIsBDone] = useState(false);
  const [isDDone, setIsDDone] = useState(false);
  const [isEDone, setIsEDone] = useState(false);
  const [isFDone, setIsFDone] = useState(false);
  const [isGDone, setIsGDone] = useState(false);
  const [isHDone, setIsHDone] = useState(false);

  const dataFromRedux = useSelector((state: any) => state.data);

  const router = useRouter();

  useEffect(() => {
    if (dataFromRedux?.srq?.length > 0 && isHDone) {
      if (dataFromRedux.srq.includes(PENYAKIT.NARKOBA)) {
        router.replace(urls.MINI_2);
      } else if (dataFromRedux.srq.includes(PENYAKIT.PSIKOSIS)) {
        router.replace(urls.MINI_3);
      } else if (dataFromRedux.srq.includes(PENYAKIT.PTSD)) {
        router.replace(urls.MINI_4);
      }
    }
  }, [dataFromRedux?.srq, isHDone]);

  return (
    <CoreLayout>
      {!isADone && <EpisodeDepresif setIsDone={setIsADone} />}
      {isADone && !isBDone && <Distimia setIsDone={setIsBDone} />}
      {isBDone && !isDDone && <Agorafobia setIsDone={setIsDDone} />}
      {isDDone && !isEDone && <GangguanPanik setIsDone={setIsEDone} />}
      {isEDone && !isFDone && <Sosialfobia setIsDone={setIsFDone} />}
      {isFDone && !isGDone && (
        <GangguanObsesifKompulsif setIsDone={setIsGDone} />
      )}
      {isGDone && <GangguanAnxietasMenyeluruh setIsDone={setIsHDone} />}
    </CoreLayout>
  );
}

export default Mini1;
