"use client";

import CoreLayout from "@/layout/CoreLayout";
import { useState } from "react";
import EpisodeDepresif from "./episodeDepresif";

function Mini1() {
  const [isADone, setIsADone] = useState(false);
  const [isBDone, setIsBDone] = useState(false);

  return (
    <CoreLayout>
      {!isADone && <EpisodeDepresif setIsDone={setIsADone} />}
      {isADone && !isBDone && <span>B</span>}
    </CoreLayout>
  );
}

export default Mini1;
