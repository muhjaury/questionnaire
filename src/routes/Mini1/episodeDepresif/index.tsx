import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EpisodeDepresif_Type } from "./episodeDepresif.type";

function EpisodeDepresif({ setIsDone = () => {} }: EpisodeDepresif_Type) {
  const [isA1NextClicked, setIsA1NextClicked] = useState(false);
  const [isA1Done, setIsA1Done] = useState(false);
  const [isA2NextClicked, setIsA2NextClicked] = useState(false);
  const [isA2Done, setIsA2Done] = useState(false);
  const [isA3NextClicked, setIsA3NextClicked] = useState(false);
  const [a11, setA11] = useState("Iya");
  const [a12, setA12] = useState("Iya");
  const [a13, setA13] = useState("Iya");
  const [a21, setA21] = useState("Iya");
  const [a22, setA22] = useState("Iya");
  const [a23, setA23] = useState("Iya");
  const [a24, setA24] = useState("Iya");
  const [a25, setA25] = useState("Iya");
  const [a26, setA26] = useState("Iya");
  const [a27, setA27] = useState("Iya");
  const [a31, setA31] = useState("Iya");
  const [a32, setA32] = useState("Iya");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutA1Click = () => {
    setIsA1NextClicked(true);
    if (a11 && a12 && a13) {
      dispatch(ADD_DATA({ a1: { a11, a12, a13 } }));
      const countA1 = [a11, a12, a13].filter((i) => i === "Iya").length;
      if (countA1 >= 2) {
        setIsA1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutA2Click = () => {
    setIsA2NextClicked(true);
    if (a21 && a22 && a23 && a24 && a25 && a26 && a27) {
      dispatch(ADD_DATA({ a2: { a21, a22, a23, a24, a25, a26, a27 } }));
      const countA2 = [a21, a22, a23, a24, a25, a26, a27].filter(
        (i) => i === "Iya"
      ).length;
      if (countA2 >= 4) {
        dispatch(ADD_DATA({ aResult: "Depresi" }));
        setIsA2Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutA3Click = () => {
    setIsA3NextClicked(true);
    if (a31 && a32) {
      dispatch(ADD_DATA({ a3: { a31, a32 } }));
      if (a31 === "Iya" && a32 === "Iya") {
        dispatch(ADD_DATA({ aResult: "Gangguan Depresi Berulang" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const A1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Episode Depresif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setA11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a11}
              error={isA1NextClicked && !a11 && "*Wajib di isi"}
            >
              Apakah anda secara terus menerus merasa sedih, depresif atau
              murung hampir sepanjang hari, hampir setiap hari?
            </Question>
            <Question
              number={2}
              setFieldValue={setA12}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a12}
              error={isA1NextClicked && !a12 && "*Wajib di isi"}
            >
              Apakah anda hampir sepanjang waktu kurang berminat terhadap banyak
              hal atau kurang bisa menikmati hal-hal yang biasanya anda nikmati?
            </Question>
            <Question
              number={3}
              setFieldValue={setA13}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a13}
              error={isA1NextClicked && !a13 && "*Wajib di isi"}
            >
              Apakah anda merasa lelah atau tidak bertenaga, hampir sepanjang
              waktu?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutA1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const A2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Episode Depresif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setA21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a21}
              error={isA2NextClicked && !a21 && "*Wajib di isi"}
            >
              Apakah nafsu makan anda berubah secara mencolok atau apakah berat
              badan anda meningkat atau menurun tanpa upaya yang disengaja?
            </Question>
            <Question
              number={2}
              setFieldValue={setA22}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a22}
              error={isA2NextClicked && !a22 && "*Wajib di isi"}
            >
              Apakah anda mengalami kesulitan tidur hampir setiap malam
              (kesulitan untuk mulai tidur, terbangun tengah malam atau
              terbangun lebih dini, tidur berlebihan)?
            </Question>
            <Question
              number={3}
              setFieldValue={setA23}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a23}
              error={isA2NextClicked && !a23 && "*Wajib di isi"}
            >
              Apakah anda berbicara atau bergerak lebih lambat daripada
              biasanya, gelisah, tidak tenang atau mengalami kesulitan untuk
              tetap diam?
            </Question>
            <Question
              number={4}
              setFieldValue={setA24}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a24}
              error={isA2NextClicked && !a24 && "*Wajib di isi"}
            >
              Apakah anda kehilangan kepercayaan diri, atau apakah anda merasa
              tak berharga atau bahkan lebih rendah daripada orang lain?
            </Question>
            <Question
              number={5}
              setFieldValue={setA25}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a25}
              error={isA2NextClicked && !a25 && "*Wajib di isi"}
            >
              Apakah anda merasa bersalah atau mempersalahkan diri sendiri?
            </Question>
            <Question
              number={6}
              setFieldValue={setA26}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a26}
              error={isA2NextClicked && !a26 && "*Wajib di isi"}
            >
              Apakah anda mengalami kesulitan berpikir atau berkonsentrasi, atau
              apakah anda mempunyai kesulitan untuk mengambil keputusan?
            </Question>
            <Question
              number={7}
              setFieldValue={setA27}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a27}
              error={isA2NextClicked && !a27 && "*Wajib di isi"}
            >
              Apakah anda berniat untuk menyakiti diri sendiri, ingin bunuh diri
              atau berharap bahwa anda mati?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutA2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const A3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Episode Depresif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setA31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a31}
              error={isA3NextClicked && !a31 && "*Wajib di isi"}
            >
              Selama hidup anda, pernahkah anda selama dua minggu atau lebih
              merasa depresi dan mengalami hal-hal yang baru kita bicarakan?
            </Question>
            <Question
              number={2}
              setFieldValue={setA32}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={a32}
              error={isA3NextClicked && !a32 && "*Wajib di isi"}
            >
              Sebelum anda merasakan depresi ini, apakah anda merasa baik saja
              selama sekurangnya 2 bulan?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutA3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isA1Done) {
    return A1();
  } else if (isA1Done && !isA2Done) {
    return A2();
  } else if (isA2Done) {
    return A3();
  }
}

export default EpisodeDepresif;
