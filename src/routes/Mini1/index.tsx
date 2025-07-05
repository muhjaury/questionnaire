"use client";

import CoreLayout from "@/layout/CoreLayout";
import { useState } from "react";
import Distimia from "./distimia";
import EpisodeDepresif from "./episodeDepresif";
import Agorafobia from "./agorafobia";

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
      {isDDone && !isEDone && <span>E</span>}
      {isEDone && !isFDone && <span>F</span>}
      {isFDone && !isGDone && <span>G</span>}
      {isGDone && !isHDone && <span>H</span>}
    </CoreLayout>
  );
}

export default Mini1;
