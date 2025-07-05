"use client";

import { Button, Card, Question } from "@/components";
import { urls } from "@/constant/path";
import { PENYAKIT } from "@/constant/variable";
import CoreLayout from "@/layout/CoreLayout";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SRQ() {
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
  const [answer11, setAnswer11] = useState("Tidak");
  const [answer12, setAnswer12] = useState("Tidak");
  const [answer13, setAnswer13] = useState("Tidak");
  const [answer14, setAnswer14] = useState("Tidak");
  const [answer15, setAnswer15] = useState("Tidak");
  const [answer16, setAnswer16] = useState("Tidak");
  const [answer17, setAnswer17] = useState("Tidak");
  const [answer18, setAnswer18] = useState("Tidak");
  const [answer19, setAnswer19] = useState("Tidak");
  const [answer20, setAnswer20] = useState("Tidak");
  const [answer21, setAnswer21] = useState("Tidak");
  const [answer22, setAnswer22] = useState("Tidak");
  const [answer23, setAnswer23] = useState("Tidak");
  const [answer24, setAnswer24] = useState("Tidak");
  const [answer25, setAnswer25] = useState("Tidak");
  const [answer26, setAnswer26] = useState("Tidak");
  const [answer27, setAnswer27] = useState("Tidak");
  const [answer28, setAnswer28] = useState("Tidak");
  const [answer29, setAnswer29] = useState("Tidak");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLanjutClick = () => {
    let result = [];
    const arr1 = [
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
      answer9,
      answer10,
      answer11,
      answer12,
      answer13,
      answer14,
      answer15,
      answer16,
      answer17,
      answer18,
      answer19,
      answer20,
    ];
    const arr2 = [answer21];
    const arr3 = [answer23, answer24, answer25];
    const arr4 = [answer25, answer26, answer27, answer28, answer29];

    const condition1 = arr1.filter((i) => i === "Iya").length;
    const condition2 = arr2.filter((i) => i === "Iya").length;
    const condition3 = arr3.filter((i) => i === "Iya").length;
    const condition4 = arr4.filter((i) => i === "Iya").length;

    if (condition1 >= 5) {
      result.push(PENYAKIT.DEPRESI);
    }
    if (condition2 === 1) {
      result.push(PENYAKIT.NARKOBA);
    }
    if (condition3 >= 1) {
      result.push(PENYAKIT.PSIKOSIS);
    }
    if (condition4 >= 1) {
      result.push(PENYAKIT.PTSD);
    }

    dispatch(ADD_DATA({ srq: result }));
    router.push(urls.SRQ_RESULT);
  };

  return (
    <CoreLayout>
      <Card>
        <p className="text-center font-bold text-3xl md:text-5xl mb-8">
          Psikotes
        </p>
        <div className="flex flex-col gap-4">
          <Question
            number={1}
            setFieldValue={setAnswer1}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer1}
          >
            Apakah Anda sering merasa sakit kepala?
          </Question>
          <Question
            number={2}
            setFieldValue={setAnswer2}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer2}
          >
            Apakah Anda kehilangan nafsu makan?
          </Question>
          <Question
            number={3}
            setFieldValue={setAnswer3}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer3}
          >
            Apakah tidur Anda tidak nyenyak?
          </Question>
          <Question
            number={4}
            setFieldValue={setAnswer4}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer4}
          >
            Apakah Anda mudah merasa takut?
          </Question>
          <Question
            number={5}
            setFieldValue={setAnswer5}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer5}
          >
            Apakah Anda merasa cemas, tegang dan khawatir?
          </Question>
          <Question
            number={6}
            setFieldValue={setAnswer6}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer6}
          >
            Apakah tangan Anda gemetar?
          </Question>
          <Question
            number={7}
            setFieldValue={setAnswer7}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer7}
          >
            Apakah Anda mengalami gangguan pencernaan?
          </Question>
          <Question
            number={8}
            setFieldValue={setAnswer8}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer8}
          >
            Apakah Anda merasa sulit berpikir jernih?
          </Question>
          <Question
            number={9}
            setFieldValue={setAnswer9}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer9}
          >
            Apakah Anda merasa tidak bahagia?
          </Question>
          <Question
            number={10}
            setFieldValue={setAnswer10}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer10}
          >
            Apakah Anda lebih sering menangis?
          </Question>
          <Question
            number={11}
            setFieldValue={setAnswer11}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer11}
          >
            Apakah Anda merasa sulit untuk menikmati aktivitas sehari-hari?
          </Question>
          <Question
            number={12}
            setFieldValue={setAnswer12}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer12}
          >
            Apakah Anda mengalami kesulitan untuk mengambil keputusan?
          </Question>
          <Question
            number={13}
            setFieldValue={setAnswer13}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer13}
          >
            Apakah aktivitas/tugas sehari-hari Anda terbengkalai?
          </Question>
          <Question
            number={14}
            setFieldValue={setAnswer14}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer14}
          >
            Apakah Anda merasa tidak mampu berperan dalam kehidupan ini?
          </Question>
          <Question
            number={15}
            setFieldValue={setAnswer15}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer15}
          >
            Apakah Anda kehilangan minat terhadap banyak hal?
          </Question>
          <Question
            number={16}
            setFieldValue={setAnswer16}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer16}
          >
            Apakah Anda merasa tidak berharga?
          </Question>
          <Question
            number={17}
            setFieldValue={setAnswer17}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer17}
          >
            Apakah Anda mempunyai pikiran untuk mengakhiri hidup Anda?
          </Question>
          <Question
            number={18}
            setFieldValue={setAnswer18}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer18}
          >
            Apakah Anda merasa lelah sepanjang waktu?
          </Question>
          <Question
            number={19}
            setFieldValue={setAnswer19}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer19}
          >
            Apakah Anda merasa tidak enak di perut?
          </Question>
          <Question
            number={20}
            setFieldValue={setAnswer20}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer20}
          >
            Apakah Anda mudah lelah?
          </Question>
          <Question
            number={21}
            setFieldValue={setAnswer21}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer21}
          >
            Apakah Anda minum alkohol lebih banyak dari biasanya atau Apakah
            Anda menggunakan narkoba?
          </Question>
          <Question
            number={22}
            setFieldValue={setAnswer22}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer22}
          >
            Apakah Anda yakin bahwa seseorang mencoba mencelakai Anda dengan
            cara tertentu?
          </Question>
          <Question
            number={23}
            setFieldValue={setAnswer23}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer23}
          >
            Apakah ada yang mengganggu atau hal yang tidak biasa dalam pikiran
            Anda?
          </Question>
          <Question
            number={24}
            setFieldValue={setAnswer24}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer24}
          >
            Apakah Anda pernah mendengar suara tanpa tahu sumbernya atau yang
            orang lain tidak dapat dengar?
          </Question>
          <Question
            number={25}
            setFieldValue={setAnswer25}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer25}
          >
            Apakah Anda mengalami mimpi yang mengganggu tentang suatu
            bencana/musibah atau adakah saat-saat Anda seolah mengalami kembali
            kejadian bencana itu?
          </Question>
          <Question
            number={26}
            setFieldValue={setAnswer26}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer26}
          >
            Apakah Anda menghindari kegiatan, tempat, orang atau pikiran
            mengingatkan Anda akan bencana tersebut?
          </Question>
          <Question
            number={27}
            setFieldValue={setAnswer27}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer27}
          >
            Apakah minat Anda terhadap teman dan kegiatan yang biasa Anda
            lakukan berkurang?
          </Question>
          <Question
            number={28}
            setFieldValue={setAnswer28}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer28}
          >
            Apakah Anda merasa sangat terganggu jika berada dalam situasi yang
            mengingatkan Anda akan bencana atau jika Anda berpikir tentang
            bencana itu?
          </Question>
          <Question
            number={29}
            setFieldValue={setAnswer29}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer29}
          >
            Apakah Anda kesulitan memahami atau mengekspresikan perasaan Anda?
          </Question>
        </div>
      </Card>
      <div className="flex justify-end w-full max-w-300" data-aos="fade-right">
        <Button onClick={handleLanjutClick}>Lanjut</Button>
      </div>
    </CoreLayout>
  );
}

export default SRQ;
