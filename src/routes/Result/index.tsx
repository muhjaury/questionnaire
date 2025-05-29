"use client";

import { Card } from "@/components";
import CoreLayout from "@/layout/CoreLayout";
import SMILE from "./../../assets/img/smile.png";
import { Img } from "./result.style";

function Result() {
  return (
    <CoreLayout>
      <Card>
        <div className="flex flex-col gap-4 items-center">
          <Img alt="result" src={SMILE} />
          <p className="text-center font-bold text-2xl lg:text-5xl mb-8">
            Hasil
          </p>
          <p className="text-center text-xl lg:text-4xl mb-8">
            Selamat! Senang sekali mengetahui kamu baik-baik saja dan sehat
            secara mental.
          </p>
        </div>
      </Card>
    </CoreLayout>
  );
}

export default Result;
