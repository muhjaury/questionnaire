import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Alkohol_Type } from "./alkohol.type";

function Alkohol({ setIsDone = () => {} }: Alkohol_Type) {
  const [isL1NextClicked, setIsL1NextClicked] = useState(false);
  const [isL1Done, setIsL1Done] = useState(false);
  const [isL2NextClicked, setIsL2NextClicked] = useState(false);
  const [isL2Done, setIsL2Done] = useState(false);
  const [isL3NextClicked, setIsL3NextClicked] = useState(false);
  const [l11, setL11] = useState("Iya");
  const [l21, setL21] = useState("Iya");
  const [l22, setL22] = useState("Iya");
  const [l23, setL23] = useState("Tidak");
  const [l24, setL24] = useState("Tidak");
  const [l25, setL25] = useState("Tidak");
  const [l26, setL26] = useState("Tidak");
  const [l31, setL31] = useState("Iya");
  const [l32, setL32] = useState("Tidak");
  const [l33, setL33] = useState("Tidak");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutL1Click = () => {
    setIsL1NextClicked(true);
    if (l11) {
      dispatch(ADD_DATA({ l1: { l11 } }));
      if (l11 === "Iya") {
        setIsL1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutL2Click = () => {
    setIsL2NextClicked(true);
    if (l21 && l22 && l23 && l24 && l25 && l26) {
      dispatch(ADD_DATA({ l2: { l21, l22, l23, l24, l25, l26 } }));
      const countL2 = [l21, l22, l23, l24, l25, l26].filter(
        (i) => i === "Iya"
      ).length;
      if (countL2 >= 3) {
        dispatch(ADD_DATA({ lResult: "Ketergantungan Alkohol" }));
        setIsDone(true);
      } else {
        setIsL2Done(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutL3Click = () => {
    setIsL3NextClicked(true);
    if (l31 && l32 && l33) {
      dispatch(ADD_DATA({ l3: { l31, l32, l33 } }));
      const countL3 = [l31, l32, l33].filter((i) => i === "Iya").length;
      if (countL3 >= 1) {
        dispatch(ADD_DATA({ lResult: "Penggunaan Merugikan dari Alkohol" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const L1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setL11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l11}
              error={isL1NextClicked && !l11 && "*Wajib di isi"}
            >
              Dalam 12 bulan terakhir, apakah anda minum lebih banyak daripada
              jumlah yang setara dengan 1 botol anggur (Bir: 2½ botol besar; 5
              botol kecil/kaleng) pada 3 kesempatan atau lebih (perjamuan,
              pesta, pertemuan,...)
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutL1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const L2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">Dalam 12 bulan terakhir :</p>
            <Question
              number={1}
              setFieldValue={setL21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l21}
              error={isL2NextClicked && !l21 && "*Wajib di isi"}
            >
              Apakah anda sering merasakan suatu keinginan atau dorongan yang
              kuat untuk minum, sehingga anda tidak mampu untuk bertahan?
            </Question>
            <Question
              number={2}
              setFieldValue={setL22}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l22}
              error={isL2NextClicked && !l22 && "*Wajib di isi"}
            >
              Apakah anda telah mencoba untuk tidak minum tetapi gagal, atau
              merasa sulit untuk berhenti minum sebelum anda mabuk?
            </Question>
            <Question
              number={3}
              setFieldValue={setL23}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l23}
              error={isL2NextClicked && !l23 && "*Wajib di isi"}
            >
              Ketika anda mengurangi minum apakah tangan anda bergetar, apakah
              anda berkeringat atau merasa jengkel ? Atau, apakah anda minum
              untuk menghindari semua problem ini atau untuk menghindari
              kekhawatiran?
            </Question>
            <Question
              number={4}
              setFieldValue={setL24}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l24}
              error={isL2NextClicked && !l24 && "*Wajib di isi"}
            >
              Apakah anda perlu minum lebih banyak untuk memperoleh efek yang
              sama seperti saat anda pertama kali mulai minum?
            </Question>
            <Question
              number={5}
              setFieldValue={setL25}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l25}
              error={isL2NextClicked && !l25 && "*Wajib di isi"}
            >
              Apakah anda mengurangi waktu untuk bekerja, menikmati hobi,
              berkumpul dengan orang lain, sebagai akibat kebiasaan minum anda?
            </Question>
            <Question
              number={6}
              setFieldValue={setL26}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l26}
              error={isL2NextClicked && !l26 && "*Wajib di isi"}
            >
              Apakah anda tetap melanjutkan minum walaupun anda tahu bahwa
              kebiasaan minum ini menyebabkan problem kesehatan atau kejiwaan?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutL2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const L3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">Dalam 12 bulan terakhir :</p>
            <Question
              number={1}
              setFieldValue={setL31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l31}
              error={isL3NextClicked && !l31 && "*Wajib di isi"}
            >
              Sebagai akibat minum, apakah anda ada problem dengan fisik anda,
              misalnya penyakit hati, hepatitis, penyakit lambung, pankreatitis,
              muntah darah, kaki kesemutan atau baal, atau mungkin problem
              psikologis seperti tidak berminat terhadap kebanyakan hal, merasa
              depresif, atau merasa tidak percaya terhadap orang lain?
            </Question>
            <Question
              number={2}
              setFieldValue={setL32}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l32}
              error={isL3NextClicked && !l32 && "*Wajib di isi"}
            >
              Sebagai akibat dari minum, apakah anda mendapat masalah di
              pekerjaan atau dengan keluarga anda?
            </Question>
            <Question
              number={3}
              setFieldValue={setL33}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={l33}
              error={isL3NextClicked && !l33 && "*Wajib di isi"}
            >
              Apakah anda mengalami kecelakaan karena anda habis minum
              (kecelakaan mobil, menggunakan mesin atau pisau, dsb.)?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutL3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isL1Done) {
    return L1();
  } else if (isL1Done && !isL2Done) {
    return L2();
  } else if (isL2Done) {
    return L3();
  }
}

export default Alkohol;
