"use client";

import { Button, Card } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function Main() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLanjutClick = () => {
    dispatch(ADD_DATA({ start: true }));
    router.push(urls.SRQ);
  };

  return (
    <CoreLayout>
      <Card>
        <p className="text-center font-bold text-3xl md:text-5xl mb-8">
          Psikotes
        </p>
        <p className="text-justify text-xl md:text-2xl">
          &nbsp;&nbsp;&nbsp;Pertanyaan berikut berhubungan dengan masalah yang
          mungkin mengganggu Anda selama <b>30 hari terakhir</b>. Apabila Anda
          menganggap pertanyaan itu Anda alami, tekan jawaban <b>Iya</b>.
          Sebaliknya, Apabila Anda menganggap pertanyaan itu tidak Anda alami,
          tekan jawaban <b>Tidak</b>. Jika Anda tidak yakin tentang jawabannya,
          berilah jawaban yang paling sesuai di antara Iya dan Tidak. Kami
          tegaskan bahwa jawaban Anda bersifat rahasia dan akan digunakan hanya
          untuk membantu pemecahan masalah Anda.
        </p>
      </Card>

      <div className="flex justify-end w-full max-w-300" data-aos="fade-right">
        <Button onClick={handleLanjutClick}>Mulai Tes</Button>
      </div>
    </CoreLayout>
  );
}

export default Main;
