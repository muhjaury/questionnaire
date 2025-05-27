"use client";

import { Button, Question } from "@/components";
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

  return (
    <div className="p-8 lg:px-32 justify-center">
      <div className="bg-gray-300 rounded-xl p-8">
        <p className="text-center font-bold text-2xl lg:text-5xl mb-8">
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
            Pertanyaan 1
          </Question>
          <Question
            number={2}
            setFieldValue={setAnswer2}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer2}
          >
            Pertanyaan 2
          </Question>
          <Question
            number={3}
            setFieldValue={setAnswer3}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer3}
          >
            Pertanyaan 3
          </Question>
          <Question
            number={4}
            setFieldValue={setAnswer4}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer4}
          >
            Pertanyaan 4
          </Question>
          <Question
            number={5}
            setFieldValue={setAnswer5}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer5}
          >
            Pertanyaan 5
          </Question>
          <Question
            number={6}
            setFieldValue={setAnswer6}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer6}
          >
            Pertanyaan 6
          </Question>
          <Question
            number={7}
            setFieldValue={setAnswer7}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer7}
          >
            Pertanyaan 7
          </Question>
          <Question
            number={8}
            setFieldValue={setAnswer8}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer8}
          >
            Pertanyaan 8
          </Question>
          <Question
            number={9}
            setFieldValue={setAnswer9}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer9}
          >
            Pertanyaan 9
          </Question>
          <Question
            number={10}
            setFieldValue={setAnswer10}
            firstValue="Iya"
            secondValue="Tidak"
            selectedValue={answer10}
          >
            Pertanyaan 10
          </Question>
          <Button>Lanjut</Button>
        </div>
      </div>
    </div>
  );
}

export default Kuesioner;
