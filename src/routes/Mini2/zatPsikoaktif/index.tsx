import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ZatPsikoaktif_Type } from "./zatPsikoaktif.type";

function ZatPsikoaktif({ setIsDone = () => {} }: ZatPsikoaktif_Type) {
  const [isM1NextClicked, setIsM1NextClicked] = useState(false);
  const [isM1Done, setIsM1Done] = useState(false);
  const [isM2NextClicked, setIsM2NextClicked] = useState(false);
  const [isM2Done, setIsM2Done] = useState(false);
  const [isM3NextClicked, setIsM3NextClicked] = useState(false);
  const [m11, setM11] = useState("");
  const [m21, setM21] = useState("");
  const [m22, setM22] = useState("");
  const [m23, setM23] = useState("");
  const [m24, setM24] = useState("");
  const [m25, setM25] = useState("");
  const [m26, setM26] = useState("");
  const [m31, setM31] = useState("");
  const [m32, setM32] = useState("");
  const [m33, setM33] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutM1Click = () => {
    setIsM1NextClicked(true);
    if (m11) {
      dispatch(ADD_DATA({ m1: { m11 } }));
      if (m11 === "Iya") {
        setIsM1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutM2Click = () => {
    setIsM2NextClicked(true);
    if (m21 && m22 && m23 && m24 && m25 && m26) {
      dispatch(ADD_DATA({ m2: { m21, m22, m23, m24, m25, m26 } }));
      const countM2 = [m21, m22, m23, m24, m25, m26].filter(
        (i) => i === "Iya"
      ).length;
      if (countM2 >= 3) {
        dispatch(ADD_DATA({ mResult: "Ketergantungan Obat/Zat" }));
        setIsDone(true);
      } else {
        setIsM2Done(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutM3Click = () => {
    setIsM3NextClicked(true);
    if (m31 && m32 && m33) {
      dispatch(ADD_DATA({ m3: { m31, m32, m33 } }));
      const countM3 = [m31, m32, m33].filter((i) => i === "Iya").length;
      if (countM3 >= 1) {
        dispatch(ADD_DATA({ mResult: "Penggunaan Merugikan dari Obat/Zat" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const M1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Yang Berkaitan Dengan Zat Psikoaktif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setM11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m11}
              error={isM1NextClicked && !m11 && "*Wajib di isi"}
            >
              Dalam 12 bulan terakhir, apakah anda menggunakan lebih dari satu
              kali salah satu dari zat-zat/obat-obat ini agar merasa nikmat,
              merasa lebih baik atau untuk mengubah suasana perasaan anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutM1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const M2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Yang Berkaitan Dengan Zat Psikoaktif
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">Dalam 12 bulan terakhir :</p>
            <Question
              number={1}
              setFieldValue={setM21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m21}
              error={isM2NextClicked && !m21 && "*Wajib di isi"}
            >
              Apakah anda sering merasakan kebutuhan atau dorongan yang
              sedemikian berat untuk menggunakan zat/obat, sehingga anda sulit
              untuk menahannya?
            </Question>
            <Question
              number={2}
              setFieldValue={setM22}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m22}
              error={isM2NextClicked && !m22 && "*Wajib di isi"}
            >
              Apakah anda telah mencoba untuk tidak menggunakan zat/obat tetapi
              gagal, atau merasa sulit untuk berhenti sebelum anda betul-betul
              merasa nikmat?
            </Question>
            <Question
              number={3}
              setFieldValue={setM23}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m23}
              error={isM2NextClicked && !m23 && "*Wajib di isi"}
            >
              Ketika anda mengurangi penggunaan zat/obat. Apakah anda mengalami
              gejala putus zat (nyeri, gemetar, demam, kelemahan, diare, mual,
              berkeringat, denyut jantung cepat, sulit tidur gelisah, cemas,
              mudah tersinggung atau depresi)? Atau, apakah anda menggunakan
              zat/obat untuk menghindari terjadinya (GEJALA PUTUS ZAT), atau
              untuk merasa lebih nyaman?
            </Question>
            <Question
              number={4}
              setFieldValue={setM24}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m24}
              error={isM2NextClicked && !m24 && "*Wajib di isi"}
            >
              Apakah anda perlu menggunakan zat/obat dalam jumlah yang lebih
              besar untuk dapat memperoleh efek yang sama seperti saat anda
              mulai pertama kali menggunakan zat/obat?
            </Question>
            <Question
              number={5}
              setFieldValue={setM25}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m25}
              error={isM2NextClicked && !m25 && "*Wajib di isi"}
            >
              Apakah anda mengurangi waktu untuk bekerja, menikmati hobi, atau
              berkumpul dengan orang lain, sebagai akibat dari zat/obat ini?
            </Question>
            <Question
              number={6}
              setFieldValue={setM26}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m26}
              error={isM2NextClicked && !m26 && "*Wajib di isi"}
            >
              Apakah anda tetap melanjutkan penggunaan zat/obat walaupun anda
              tahu bahwa zat/obat menyebabkan masalah kesehatan atau kejiwaan?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutM2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const M3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Yang Berkaitan Dengan Zat Psikoaktif
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">Dalam 12 bulan terakhir :</p>
            <Question
              number={1}
              setFieldValue={setM31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m31}
              error={isM3NextClicked && !m31 && "*Wajib di isi"}
            >
              Sebagai akibat penggunaan zat/obat, apakah anda mengalami gangguan
              fisik, misalnya suatu kelebihan dosis yang tidak disengaja, batuk
              yang menetap, serangan kejang, infeksi, hepatitis atau cedera?
            </Question>
            <Question
              number={2}
              setFieldValue={setM32}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m32}
              error={isM3NextClicked && !m32 && "*Wajib di isi"}
            >
              Sejak anda menggunakan zat/obat, apakah anda mengalami masalah
              psikologi, seperti tidak berminat terhadap kebanyakan hal, merasa
              sedih, menjadi curiga atau tidak percaya kepada orang lain, atau
              ada pikiran-pikiran aneh?
            </Question>
            <Question
              number={3}
              setFieldValue={setM33}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={m33}
              error={isM3NextClicked && !m33 && "*Wajib di isi"}
            >
              Sebagai akibat penggunaan zat/obat, apakah anda ada masalah di
              pekerjaan atau dengan keluarga?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutM3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isM1Done) {
    return M1();
  } else if (isM1Done && !isM2Done) {
    return M2();
  } else if (isM2Done) {
    return M3();
  }
}

export default ZatPsikoaktif;
