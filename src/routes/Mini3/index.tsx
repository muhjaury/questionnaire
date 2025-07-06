"use client";

import { Button, Card, Question } from "@/components";
import { urls } from "@/constant/path";
import { PENYAKIT } from "@/constant/variable";
import CoreLayout from "@/layout/CoreLayout";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Mini3() {
  const [isN1N7NextClicked, setIsN1N7NextClicked] = useState(false);
  const [isN1N7Done, setIsN1N7Done] = useState(false);
  const [isN8N9NextClicked, setIsN8N9NextClicked] = useState(false);
  const [n11, setN11] = useState("Iya");
  const [n21, setN21] = useState("Tidak");
  const [n31, setN31] = useState("Tidak");
  const [n41, setN41] = useState("Tidak");
  const [n51, setN51] = useState("Tidak");
  const [n61, setN61] = useState("Tidak");
  const [n71, setN71] = useState("Tidak");
  const [n81, setN81] = useState("Tidak");
  const [n91, setN91] = useState("Iya");

  const dataFromRedux = useSelector((state: any) => state.data);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = () => {
    if (dataFromRedux.srq.includes(PENYAKIT.PTSD)) {
      router.replace(urls.MINI_4);
    }
  };

  const handleLanjutN1N7Click = () => {
    setIsN1N7NextClicked(true);
    if (n11 && n21 && n31 && n41 && n51 && n61 && n71) {
      dispatch(
        ADD_DATA({
          n1: { n11 },
          n2: { n21 },
          n3: { n31 },
          n4: { n41 },
          n5: { n51 },
          n6: { n61 },
          n7: { n71 },
        })
      );
      if ([n11, n21, n31, n41, n51, n61, n71].some((i) => i === "Iya")) {
        setIsN1N7Done(true);
      } else {
        handleSubmit();
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutN8N9Click = () => {
    setIsN8N9NextClicked(true);
    if (n81 && n91) {
      dispatch(ADD_DATA({ n8: { n81 }, n9: { n91 } }));
      if (n81 === "Iya" && n91 === "Tidak") {
        dispatch(ADD_DATA({ nResult: "Episode Psikotik Tunggal Saat Ini" }));
      } else if (n81 === "Tidak" && n91 === "Tidak") {
        dispatch(ADD_DATA({ nResult: "Episode Psikotik Tunggal Dulu" }));
      } else if (n81 === "Iya" && n91 === "Iya") {
        dispatch(ADD_DATA({ nResult: "Episode Psikotik Berulang Saat Ini" }));
      } else if (n81 === "Tidak" && n91 === "Iya") {
        dispatch(ADD_DATA({ nResult: "Episode Psikotik Berulang Dulu" }));
      }
      handleSubmit();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const N1N7 = () => {
    return (
      <CoreLayout>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Psikotik
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setN11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n11}
              error={isN1N7NextClicked && !n11 && "*Wajib di isi"}
            >
              Apakah keluarga atau teman anda pernah menganggap keyakinan anda
              aneh atau tidak lazim?
            </Question>
            <Question
              number={2}
              setFieldValue={setN21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n21}
              error={isN1N7NextClicked && !n21 && "*Wajib di isi"}
            >
              Pernahkah anda yakin bahwa seseorang sedang memata-matai anda,
              atau bahwa seseorang sedang berkomplot melawan anda, atau mencoba
              mencederai anda?
            </Question>
            <Question
              number={3}
              setFieldValue={setN31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n31}
              error={isN1N7NextClicked && !n31 && "*Wajib di isi"}
            >
              Pernahkah anda percaya bahwa seseorang sedang membaca pikiran anda
              atau bisa mendengar pikiran anda atau bahwa anda sungguh bisa
              membaca atau mendengar apa yang sedang dipikirkan oleh orang lain?
            </Question>
            <Question
              number={4}
              setFieldValue={setN41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n41}
              error={isN1N7NextClicked && !n41 && "*Wajib di isi"}
            >
              Pernahkan anda percaya bahwa seseorang atau suatu kekuatan di luar
              anda memasukkan ide/pikiran yang bukan milik anda ke dalam pikiran
              anda, atau menyebabkan anda bertindak sedemikian rupa yang bukan
              lazimnya anda?
            </Question>
            <Question
              number={5}
              setFieldValue={setN51}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n51}
              error={isN1N7NextClicked && !n51 && "*Wajib di isi"}
            >
              Pernahkah anda percaya bahwa anda sedang dikirimi pesan khusus
              melalui TV, radio atau koran, atau bahwa seseorang yang tidak anda
              kenal secara pribadi tertarik pada anda?
            </Question>
            <Question
              number={6}
              setFieldValue={setN61}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n61}
              error={isN1N7NextClicked && !n61 && "*Wajib di isi"}
            >
              Pernahkah anda mendapat penampakan atau pernahkah anda melihat
              hal-hal yang tidak bisa dilihat oleh orang lain?
            </Question>
            <Question
              number={7}
              setFieldValue={setN71}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n71}
              error={isN1N7NextClicked && !n71 && "*Wajib di isi"}
            >
              Pernahkah anda mendengar sesuatu yang tak dapat didengar oleh
              orang lain, seperti suara-suara?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutN1N7Click}>Lanjut</Button>
        </div>
      </CoreLayout>
    );
  };

  const N8N9 = () => {
    return (
      <CoreLayout>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Psikotik
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setN81}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n81}
              error={isN8N9NextClicked && !n81 && "*Wajib di isi"}
            >
              Apakah anda mengalami gejala tersebut akhir-akhir ini ?
            </Question>
            <Question
              number={2}
              setFieldValue={setN91}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={n91}
              error={isN8N9NextClicked && !n91 && "*Wajib di isi"}
            >
              Selama hidup anda, apakah anda mengalami (Gejala) lebih dari satu
              kali?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutN8N9Click}>Lanjut</Button>
        </div>
      </CoreLayout>
    );
  };

  if (!isN1N7Done) {
    return N1N7();
  } else if (isN1N7Done) {
    return N8N9();
  }
}

export default Mini3;
