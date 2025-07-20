import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GangguanObsesifKompulsif_Type } from "./gangguanObsesifKompulsif.type";

function GangguanObsesifKompulsif({
  setIsDone = () => {},
}: GangguanObsesifKompulsif_Type) {
  const [isG1G2NextClicked, setIsG1G2NextClicked] = useState(false);
  const [isG1G2Done, setIsG1G2Done] = useState(false);
  const [isG3NextClicked, setIsG3NextClicked] = useState(false);
  const [isG3Done, setIsG3Done] = useState(false);
  const [isG4NextClicked, setIsG4NextClicked] = useState(false);
  const [isG4Done, setIsG4Done] = useState(false);
  const [isG5NextClicked, setIsG5NextClicked] = useState(false);
  const [isG5Done, setIsG5Done] = useState(false);
  const [isG6NextClicked, setIsG6NextClicked] = useState(false);
  const [g11, setG11] = useState("Iya");
  const [g21, setG21] = useState("Tidak");
  const [g31, setG31] = useState("Iya");
  const [g41, setG41] = useState("Iya");
  const [g51, setG51] = useState("Iya");
  const [g61, setG61] = useState("Iya");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutG1G2Click = () => {
    setIsG1G2NextClicked(true);
    if (g11 && g21) {
      dispatch(ADD_DATA({ g1: { g11 }, g2: { g21 } }));
      if ([g11, g21].some((i) => i === "Iya")) {
        setIsG1G2Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutG3Click = () => {
    setIsG3NextClicked(true);
    if (g31) {
      dispatch(ADD_DATA({ g3: { g31 } }));
      if (g31 === "Iya") {
        setIsG3Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutG4Click = () => {
    setIsG4NextClicked(true);
    if (g41) {
      dispatch(ADD_DATA({ g4: { g41 } }));
      if (g41 === "Iya") {
        setIsG4Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutG5Click = () => {
    setIsG5NextClicked(true);
    if (g51) {
      dispatch(ADD_DATA({ g5: { g51 } }));
      if (g51 === "Iya") {
        setIsG5Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutG6Click = () => {
    setIsG6NextClicked(true);
    if (g61) {
      dispatch(ADD_DATA({ g6: { g61 } }));
      if (g61 === "Iya") {
        dispatch(ADD_DATA({ gResult: "Gangguan Obsesif-Kompulsif" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const G1G2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Obsesif-Kompulsif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setG11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g11}
              error={isG1G2NextClicked && !g11 && "*Wajib di isi"}
            >
              Dalam 2 minggu terakhir, apakah anda diresahkan oleh pikiran,
              rangsangan atau bayangan berulang yang tidak anda sukai,
              memuakkan, tidak layak, mendesak atau menekan (misalnya ide bahwa
              diri anda kotor, atau ada kuman, atau menyakiti seseorang walaupun
              anda tidak menghendakinya)?
            </Question>
            <Question
              number={2}
              setFieldValue={setG21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g21}
              error={isG1G2NextClicked && !g21 && "*Wajib di isi"}
            >
              Dalam 2 minggu terakhir, apakah anda melakukan sesuatu
              berulang-ulang tanpa mampu menahannya, seperti mencuci berlebihan,
              menghitung atau memeriksa sesuatu berulang-ulang?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutG1G2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const G3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Obsesif-Kompulsif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setG31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g31}
              error={isG3NextClicked && !g31 && "*Wajib di isi"}
            >
              Apakah anda berpendapat bahwa pikiran (atau perilaku) ini adalah
              hasil dari pikiran anda sendiri dan bukan berasal dari luar?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutG3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const G4 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Obsesif-Kompulsif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setG41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g41}
              error={isG4NextClicked && !g41 && "*Wajib di isi"}
            >
              Apakah anda berpendapat bahwa pikiran (atau perilaku) ini tidak
              beralasan, aneh, atau di luar kewajaran?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutG4Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const G5 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Obsesif-Kompulsif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setG51}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g51}
              error={isG5NextClicked && !g51 && "*Wajib di isi"}
            >
              Apakah pikiran itu tetap muncul walaupun anda mencoba untuk
              mengabaikan atau menghilangkannya?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutG5Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const G6 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Obsesif-Kompulsif
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setG61}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={g61}
              error={isG6NextClicked && !g61 && "*Wajib di isi"}
            >
              Apakah pikiran (dan/atau perilaku) ini menimbulkan ketegangan
              hebat atau sangat mengganggu kegiatan rutin, fungsi pekerjaan,
              kegiatan sosial biasa, atau pergaulan anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutG6Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isG1G2Done) {
    return G1G2();
  } else if (isG1G2Done && !isG3Done) {
    return G3();
  } else if (isG3Done && !isG4Done) {
    return G4();
  } else if (isG4Done && !isG5Done) {
    return G5();
  } else if (isG5Done) {
    return G6();
  }
}

export default GangguanObsesifKompulsif;
