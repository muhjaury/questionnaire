"use client";

import CoreLayout from "@/layout/CoreLayout";
import { useState } from "react";
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
      {isGDone && !isHDone && (
        <GangguanAnxietasMenyeluruh setIsDone={setIsHDone} />
      )}
    </CoreLayout>
  );
}

export default Mini1;
