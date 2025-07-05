"use client";

import { Card } from "@/components";
import CoreLayout from "@/layout/CoreLayout";

function Mini1() {
  return (
    <CoreLayout>
      <Card>
        <p className="text-center font-bold text-3xl md:text-5xl mb-8">
          Psikotes
        </p>
        <div className="flex flex-col gap-4"></div>
      </Card>
    </CoreLayout>
  );
}

export default Mini1;
