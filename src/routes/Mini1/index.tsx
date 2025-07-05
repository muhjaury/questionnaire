"use client";

import CoreLayout from "@/layout/CoreLayout";
import { useState } from "react";
import Distimia from "./distimia";
import EpisodeDepresif from "./episodeDepresif";

function Mini1() {
  const [isADone, setIsADone] = useState(false);
  const [isBDone, setIsBDone] = useState(false);
  const [isDDone, setIsDDone] = useState(false);

  return (
    <CoreLayout>
      {!isADone && <EpisodeDepresif setIsDone={setIsADone} />}
      {isADone && !isBDone && <Distimia setIsDone={setIsBDone} />}
      {isBDone && !isDDone && <span>C</span>}
    </CoreLayout>
  );
}

export default Mini1;
