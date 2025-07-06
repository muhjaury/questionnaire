"use client";

import CoreLayout from "@/layout/CoreLayout";
import { useState } from "react";
import Alkohol from "./alkohol";
import ZatPsikoaktif from "./zatPsikoaktif";

function Mini2() {
  const [isLDone, setIsLDone] = useState(false);
  const [isMDone, setIsMDone] = useState(false);

  return (
    <CoreLayout>
      {!isLDone && <Alkohol setIsDone={setIsLDone} />}
      {isLDone && !isMDone && <ZatPsikoaktif setIsDone={setIsMDone} />}
    </CoreLayout>
  );
}

export default Mini2;
