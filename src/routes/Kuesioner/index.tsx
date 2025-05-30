"use client";

import { Button, Card, Question } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Kuesioner() {
  const [answer1, setAnswer1] = useState("Tidak");
  const [answer2, setAnswer2] = useState("Tidak");
  const [answer3, setAnswer3] = useState("Tidak");
  const [answer4, setAnswer4] = useState("Tidak");
  const [answer5, setAnswer5] = useState("Tidak");
  const [answer6, setAnswer6] = useState("Tidak");
  const [answer7, setAnswer7] = useState("Tidak");
  const [answer8, setAnswer8] = useState("Tidak");
  const [answer9, setAnswer9] = useState("Tidak");
  const [answer10, setAnswer10] = useState("Tidak");

  const router = useRouter();

  const handleLanjutClick = () => {
    router.push(urls.RESULT);
  };

  return (
    <CoreLayout>
      <Card>
        <p className="text-center font-bold text-2xl md:text-5xl mb-8">
          Kuesioner
        </p>
        <div className="flex flex-col gap-4">
          <Question
            number={1}
            setFieldValue={setAnswer1}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer1}
          >
            Apakah Anda sedang membaca ini di layar?
          </Question>
          <Question
            number={2}
            setFieldValue={setAnswer2}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer2}
          >
            Apakah hari ini adalah hari Minggu?
          </Question>
          <Question
            number={3}
            setFieldValue={setAnswer3}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer3}
          >
            Apakah kucing memiliki sayap?
          </Question>
          <Question
            number={4}
            setFieldValue={setAnswer4}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer4}
          >
            Apakah Anda bisa bernapas di bawah air tanpa alat bantu?
          </Question>
          <Question
            number={5}
            setFieldValue={setAnswer5}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer5}
          >
            Apakah 2 + 2 = 4?
          </Question>
          <Question
            number={6}
            setFieldValue={setAnswer6}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer6}
          >
            Apakah Indonesia adalah negara kepulauan?
          </Question>
          <Question
            number={7}
            setFieldValue={setAnswer7}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer7}
          >
            Apakah matahari terbit dari barat?
          </Question>
          <Question
            number={8}
            setFieldValue={setAnswer8}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer8}
          >
            Apakah Anda merasa lapar saat ini?
          </Question>
          <Question
            number={9}
            setFieldValue={setAnswer9}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer9}
          >
            Apakah manusia membutuhkan air untuk hidup?
          </Question>
          <Question
            number={10}
            setFieldValue={setAnswer10}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer10}
          >
            Apakah Anda pernah terbang ke bulan?
          </Question>
        </div>
      </Card>
      <div className="flex justify-end w-full max-w-300" data-aos="fade-right">
        <Button onClick={handleLanjutClick}>Lanjut</Button>
      </div>
    </CoreLayout>
  );
}

export default Kuesioner;
