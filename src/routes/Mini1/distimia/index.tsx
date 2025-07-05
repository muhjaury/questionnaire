import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Distimia_Type } from "./distimia.type";

function Distimia({ setIsDone = () => {} }: Distimia_Type) {
  const [isB1NextClicked, setIsB1NextClicked] = useState(false);
  const [isB1Done, setIsB1Done] = useState(false);
  const [isB2NextClicked, setIsB2NextClicked] = useState(false);
  const [isB2Done, setIsB2Done] = useState(false);
  const [isB3NextClicked, setIsB3NextClicked] = useState(false);
  const [b11, setB11] = useState("Iya");
  const [b21, setB21] = useState("Tidak");
  const [b31, setB31] = useState("Iya");
  const [b32, setB32] = useState("Iya");
  const [b33, setB33] = useState("Iya");
  const [b34, setB34] = useState("Iya");
  const [b35, setB35] = useState("Iya");
  const [b36, setB36] = useState("Iya");
  const [b37, setB37] = useState("Iya");
  const [b38, setB38] = useState("Iya");
  const [b39, setB39] = useState("Iya");
  const [b310, setB310] = useState("Iya");
  const [b311, setB311] = useState("Iya");

  const dispatch = useDispatch();

  const handleLanjutB1Click = () => {
    setIsB1NextClicked(true);
    if (b11) {
      dispatch(ADD_DATA({ b1: { b11 } }));
      if (b11 === "Iya") {
        setIsB1Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutB2Click = () => {
    setIsB2NextClicked(true);
    if (b21) {
      dispatch(ADD_DATA({ b2: { b21 } }));
      if (b21 === "Tidak") {
        setIsB2Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutB3Click = () => {
    setIsB3NextClicked(true);
    if (
      b31 &&
      b32 &&
      b33 &&
      b34 &&
      b35 &&
      b36 &&
      b37 &&
      b38 &&
      b39 &&
      b310 &&
      b311
    ) {
      dispatch(
        ADD_DATA({
          b3: { b31, b32, b33, b34, b35, b36, b37, b38, b39, b310, b311 },
        })
      );
      const countB3 = [
        b31,
        b32,
        b33,
        b34,
        b35,
        b36,
        b37,
        b38,
        b39,
        b310,
        b311,
      ].filter((i) => i === "Iya").length;
      if (countB3 >= 3) {
        dispatch(ADD_DATA({ bResult: "Distimia" }));
      }
      setIsDone(true);
    }
  };

  const B1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setB11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b11}
              error={isB1NextClicked && !b11 && "*Wajib di isi"}
            >
              Apakah anda merasa sedih, murung atau tertekan sepanjang waktu
              selama 2 tahun terakhir?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutB1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const B2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setB21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b21}
              error={isB2NextClicked && !b21 && "*Wajib di isi"}
            >
              Apakah periode ini diselingi oleh perasaan baik-baik saja (tidak
              sedih, murung atau tertekan atau depresi) selama 2 bulan atau
              lebih?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutB2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const B3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setB31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b31}
              error={isB3NextClicked && !b31 && "*Wajib di isi"}
            >
              Apakah anda kehilangan energi?
            </Question>
            <Question
              number={2}
              setFieldValue={setB32}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b32}
              error={isB3NextClicked && !b32 && "*Wajib di isi"}
            >
              Apakah anda kesulitan tidur (kesulitan untuk mulai tidur, bangun
              tengah malam atau bangun lebih dini)?
            </Question>
            <Question
              number={3}
              setFieldValue={setB33}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b33}
              error={isB3NextClicked && !b33 && "*Wajib di isi"}
            >
              Apakah anda kehilangan kepercayaan diri, atau merasa tidak semampu
              biasanya?
            </Question>
            <Question
              number={4}
              setFieldValue={setB34}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b34}
              error={isB3NextClicked && !b34 && "*Wajib di isi"}
            >
              Apakah anda sulit berkonsentrasi?
            </Question>
            <Question
              number={5}
              setFieldValue={setB35}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b35}
              error={isB3NextClicked && !b35 && "*Wajib di isi"}
            >
              Apakah anda sering menangis?
            </Question>
            <Question
              number={6}
              setFieldValue={setB36}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b36}
              error={isB3NextClicked && !b36 && "*Wajib di isi"}
            >
              Apakah minat anda berkurang atau kurang bisa menikmati hal-hal
              yang biasanya anda nikmati?
            </Question>
            <Question
              number={7}
              setFieldValue={setB37}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b37}
              error={isB3NextClicked && !b37 && "*Wajib di isi"}
            >
              Apakah anda sering merasa putus asa?
            </Question>
            <Question
              number={8}
              setFieldValue={setB38}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b38}
              error={isB3NextClicked && !b38 && "*Wajib di isi"}
            >
              Apakah anda sering merasa tidak mampu memikul tanggung jawab
              sehari-hari?
            </Question>
            <Question
              number={9}
              setFieldValue={setB39}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b39}
              error={isB3NextClicked && !b39 && "*Wajib di isi"}
            >
              Apakah anda merasa bahwa hidup anda selalu buruk dan tidak akan
              membaik?
            </Question>
            <Question
              number={10}
              setFieldValue={setB310}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b310}
              error={isB3NextClicked && !b310 && "*Wajib di isi"}
            >
              Apakah anda mengurangi aktivitas sosial anda atau cenderung untuk
              menarik diri?
            </Question>
            <Question
              number={11}
              setFieldValue={setB311}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={b311}
              error={isB3NextClicked && !b311 && "*Wajib di isi"}
            >
              Apakah anda menjadi lebih pendiam daripada sebelumnya?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutB3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isB1Done) {
    return B1();
  } else if (isB1Done && !isB2Done) {
    return B2();
  } else if (isB2Done) {
    return B3();
  }
}

export default Distimia;
