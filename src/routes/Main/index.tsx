"use client";

import { Button, Card } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";

function Main() {
  const router = useRouter();

  const handleLanjutClick = () => {
    router.push(urls.SRQ);
  };

  return (
    <CoreLayout>
      <Card>
        <p className="text-center font-bold text-3xl md:text-5xl mb-8">
          Psikotes
        </p>
        <p className="text-justify text-xl md:text-2xl">
          Pertanyaan berikut berhubungan dengan masalah yang mungkin mengganggu
          Anda selama 30 hari terakhir. Apabila Anda menganggap pertanyaan itu
          Anda alami dalam 30 hari terakhir, berilah tanda silang (X) pada kolom
          Y (berarti Ya). Sebaliknya, Apabila Anda menganggap pertanyaan itu
          tidak Anda alami dalam 30 hari terakhir, berilah tanda silang (X) pada
          kolom T (Tidak). Jika Anda tidak yakin tentang jawabannya, berilah
          jawaban yang paling sesuai di antara Y dan T. Kami tegaskan bahwa
          jawaban Anda bersifat rahasia dan akan digunakan hanya untuk membantu
          pemecahan masalah Anda.
        </p>
      </Card>

      <div className="flex justify-end w-full max-w-300" data-aos="fade-right">
        <Button onClick={handleLanjutClick}>Mulai Tes</Button>
      </div>
    </CoreLayout>
  );
}

export default Main;
