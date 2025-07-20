"use client";

import { Button, Card, Question } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Mini4() {
  const [isI1I2NextClicked, setIsI1I2NextClicked] = useState(false);
  const [isI1I2Done, setIsI1I2Done] = useState(false);
  const [isI3I4NextClicked, setIsI3I4NextClicked] = useState(false);
  const [isI3I4Done, setIsI3I4Done] = useState(false);
  const [isI5NextClicked, setIsI5NextClicked] = useState(false);
  const [i11, setI11] = useState("");
  const [i21, setI21] = useState("");
  const [i31, setI31] = useState("");
  const [i41, setI41] = useState("");
  const [i51, setI51] = useState("");
  const [i52, setI52] = useState("");
  const [i53, setI53] = useState("");
  const [i54, setI54] = useState("");
  const [i55, setI55] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = () => {
    router.replace(urls.MINI_RESULT);
  };

  const handleLanjutI1I2Click = () => {
    setIsI1I2NextClicked(true);
    if (i11 && i21) {
      dispatch(
        ADD_DATA({
          i1: { i11 },
          i2: { i21 },
        })
      );
      if ([i11, i21].every((i) => i === "Iya")) {
        setIsI1I2Done(true);
      } else {
        handleSubmit();
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutI3I4Click = () => {
    setIsI3I4NextClicked(true);
    if (i31 && i41) {
      dispatch(ADD_DATA({ i3: { i31 }, i4: { i41 } }));

      if ([i31, i41].every((i) => i === "Iya")) {
        setIsI3I4Done(true);
      } else {
        handleSubmit();
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutI5Click = () => {
    setIsI3I4NextClicked(true);
    if (i51 && i52 && i53 && i54 && i55) {
      dispatch(ADD_DATA({ i5: { i51, i52, i53, i54, i55 } }));
      const countI5 = [i51, i52, i53, i54, i55].filter(
        (i) => i === "Iya"
      ).length;
      if (countI5 >= 2) {
        dispatch(ADD_DATA({ iResult: "Gangguan Stres Pasca Trauma" }));
      }
      handleSubmit();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const I1I2 = () => {
    return (
      <CoreLayout>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Stress Pasca Trauma
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setI11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i11}
              error={isI1I2NextClicked && !i11 && "*Wajib di isi"}
            >
              Pernahkah anda mengalami suatu peristiwa traumatik atau menekan
              luar biasa (misalnya gempa bumi, banjir, penyerangan fisik atau
              pemerkosaan, berada dalam suatu perang atau pertempuran, membunuh
              seseorang, menyaksikan orang dibunuh, kebakaran, kecelakaan
              berat)?
            </Question>
            <Question
              number={2}
              setFieldValue={setI21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i21}
              error={isI1I2NextClicked && !i21 && "*Wajib di isi"}
            >
              Apakah anda seringkali mengalami ulang peristiwa ini secara tidak
              menyenangkan (misalnya dalam mimpi, pengingatan yang kuat, kilas
              balik/teringat kembali, atau menimbulkan reaksi pada badan)?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutI1I2Click}>Lanjut</Button>
        </div>
      </CoreLayout>
    );
  };

  const I3I4 = () => {
    return (
      <CoreLayout>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Stress Pasca Trauma
          </p>
          <p className="md:text-xl">Sejak peristiwa ini :</p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setI31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i31}
              error={isI3I4NextClicked && !i31 && "*Wajib di isi"}
            >
              Apakah anda menghindari hal-hal yang mengingatkan anda akan
              peristiwa tersebut?
            </Question>
            <Question
              number={2}
              setFieldValue={setI41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i41}
              error={isI3I4NextClicked && !i41 && "*Wajib di isi"}
            >
              Apakah anda kesulitan untuk mengingat-ingat beberapa bagian
              penting dari apa yang terjadi?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutI3I4Click}>Lanjut</Button>
        </div>
      </CoreLayout>
    );
  };

  const I5 = () => {
    return (
      <CoreLayout>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Stress Pasca Trauma
          </p>
          <p className="md:text-xl">
            Sejak peristiwa ini, apakah anda mengamati bahwa anda telah berubah,
            dan apakah anda akhir-akhir ini :
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setI51}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i51}
              error={isI5NextClicked && !i51 && "*Wajib di isi"}
            >
              Sukar tidur?
            </Question>
            <Question
              number={2}
              setFieldValue={setI52}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i52}
              error={isI5NextClicked && !i52 && "*Wajib di isi"}
            >
              Terutama mudah tersinggung atau meluap amarahnya?
            </Question>
            <Question
              number={3}
              setFieldValue={setI53}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i53}
              error={isI5NextClicked && !i53 && "*Wajib di isi"}
            >
              Sulit berkonsentrasi/memusatkan perhatian?
            </Question>
            <Question
              number={4}
              setFieldValue={setI54}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i54}
              error={isI5NextClicked && !i54 && "*Wajib di isi"}
            >
              Merasa gelisah atau terus-menerus bersiaga?
            </Question>
            <Question
              number={5}
              setFieldValue={setI55}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={i55}
              error={isI5NextClicked && !i55 && "*Wajib di isi"}
            >
              Mudah tertegun?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutI5Click}>Lanjut</Button>
        </div>
      </CoreLayout>
    );
  };

  if (!isI1I2Done) {
    return I1I2();
  } else if (isI1I2Done && !isI3I4Done) {
    return I3I4();
  } else if (isI3I4Done) {
    return I5();
  }
}

export default Mini4;
