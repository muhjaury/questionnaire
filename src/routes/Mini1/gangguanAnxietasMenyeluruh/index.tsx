import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GangguanAnxietasMenyeluruh_Type } from "./gangguanAnxietasMenyeluruh.type";

function GangguanAnxietasMenyeluruh({
  setIsDone = () => {},
}: GangguanAnxietasMenyeluruh_Type) {
  const [isH1NextClicked, setIsH1NextClicked] = useState(false);
  const [isH1Done, setIsH1Done] = useState(false);
  const [isH2NextClicked, setIsH2NextClicked] = useState(false);
  const [h11, setH11] = useState("");
  const [h21, setH21] = useState("");
  const [h22, setH22] = useState("");
  const [h23, setH23] = useState("");
  const [h24, setH24] = useState("");
  const [h25, setH25] = useState("");
  const [h26, setH26] = useState("");
  const [h27, setH27] = useState("");
  const [h28, setH28] = useState("");
  const [h29, setH29] = useState("");
  const [h210, setH210] = useState("");
  const [h211, setH211] = useState("");
  const [h212, setH212] = useState("");
  const [h213, setH213] = useState("");
  const [h214, setH214] = useState("");
  const [h215, setH215] = useState("");
  const [h216, setH216] = useState("");
  const [h217, setH217] = useState("");
  const [h218, setH218] = useState("");
  const [h219, setH219] = useState("");
  const [h220, setH220] = useState("");
  const [h221, setH221] = useState("");
  const [h222, setH222] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutH1Click = () => {
    setIsH1NextClicked(true);
    if (h11) {
      dispatch(ADD_DATA({ h1: { h11 } }));
      if (h11 === "Iya") {
        setIsH1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutH2Click = () => {
    setIsH2NextClicked(true);
    if (
      h21 &&
      h22 &&
      h23 &&
      h24 &&
      h25 &&
      h26 &&
      h27 &&
      h28 &&
      h29 &&
      h210 &&
      h211 &&
      h212 &&
      h213 &&
      h214 &&
      h215 &&
      h216 &&
      h217 &&
      h218 &&
      h219 &&
      h220 &&
      h221 &&
      h222
    ) {
      dispatch(
        ADD_DATA({
          h2: {
            h21,
            h22,
            h23,
            h24,
            h25,
            h26,
            h27,
            h28,
            h29,
            h210,
            h211,
            h212,
            h213,
            h214,
            h215,
            h216,
            h217,
            h218,
            h219,
            h220,
            h221,
            h222,
          },
        })
      );
      const countH2 = [
        h25,
        h26,
        h27,
        h28,
        h29,
        h210,
        h211,
        h212,
        h213,
        h214,
        h215,
        h216,
        h217,
        h218,
        h219,
        h220,
        h221,
        h222,
      ].filter((i) => i === "Iya").length;
      if ([h21, h22, h23, h24].some((i) => i === "Iya") && countH2 >= 4) {
        dispatch(ADD_DATA({ hResult: "Gangguan Anxietas Menyeluruh" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const H1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Anxietas Menyeluruh
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setH11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h11}
              error={isH1NextClicked && !h11 && "*Wajib di isi"}
            >
              Apakah anda khawatir berlebihan atau cemas perihal 2 atau lebih
              masalah hidup sehari-hari (misalnya keuangan, kesehatan anak,
              nasib buruk) selama 6 bulan terakhir? Lebih daripada orang lain?
              Apakah kekhawatiran ini muncul hampir setiap hari? (Atau apakah
              orang mengatakan kepada anda bahwa anda khawatir berlebihan?)
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutH1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const H2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Gangguan Anxietas Menyeluruh
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">
              Selama periode ini, apakah anda sering :
            </p>
            <Question
              number={1}
              setFieldValue={setH21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h21}
              error={isH2NextClicked && !h21 && "*Wajib di isi"}
            >
              Merasa denyut jantung tak teratur, cepat atau berdebar keras?
            </Question>
            <Question
              number={2}
              setFieldValue={setH22}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h22}
              error={isH2NextClicked && !h22 && "*Wajib di isi"}
            >
              Berkeringat?
            </Question>
            <Question
              number={3}
              setFieldValue={setH23}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h23}
              error={isH2NextClicked && !h23 && "*Wajib di isi"}
            >
              Gemetar atau bergetar?
            </Question>
            <Question
              number={4}
              setFieldValue={setH24}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h24}
              error={isH2NextClicked && !h24 && "*Wajib di isi"}
            >
              Merasa mulut kering?
            </Question>
            <Question
              number={5}
              setFieldValue={setH25}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h25}
              error={isH2NextClicked && !h25 && "*Wajib di isi"}
            >
              Mengalami kesulitan bernafas?
            </Question>
            <Question
              number={6}
              setFieldValue={setH26}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h26}
              error={isH2NextClicked && !h26 && "*Wajib di isi"}
            >
              Merasa tercekik?
            </Question>
            <Question
              number={7}
              setFieldValue={setH27}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h27}
              error={isH2NextClicked && !h27 && "*Wajib di isi"}
            >
              Merasa nyeri, tertekan atau tidak enak di dada?
            </Question>
            <Question
              number={8}
              setFieldValue={setH28}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h28}
              error={isH2NextClicked && !h28 && "*Wajib di isi"}
            >
              Mengalami mual atau gangguan perut?
            </Question>
            <Question
              number={9}
              setFieldValue={setH29}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h29}
              error={isH2NextClicked && !h29 && "*Wajib di isi"}
            >
              Kepala pusing, sempoyongan, melayang atau pingsan?
            </Question>
            <Question
              number={10}
              setFieldValue={setH210}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h210}
              error={isH2NextClicked && !h210 && "*Wajib di isi"}
            >
              Merasa asing dengan sekeliling anda atau dengan bagian tubuh anda?
            </Question>
            <Question
              number={11}
              setFieldValue={setH211}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h211}
              error={isH2NextClicked && !h211 && "*Wajib di isi"}
            >
              Takut bahwa anda akan menjadi gila, kehilangan kendali atau
              pingsan?
            </Question>
            <Question
              number={12}
              setFieldValue={setH212}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h212}
              error={isH2NextClicked && !h212 && "*Wajib di isi"}
            >
              Takut bahwa anda akan mati?
            </Question>
            <Question
              number={13}
              setFieldValue={setH213}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h213}
              error={isH2NextClicked && !h213 && "*Wajib di isi"}
            >
              Mengalami kilatan panas atau dingin?
            </Question>
            <Question
              number={14}
              setFieldValue={setH214}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h214}
              error={isH2NextClicked && !h214 && "*Wajib di isi"}
            >
              Merasa kesemutan atau baal pada bagian tubuh anda?
            </Question>
            <Question
              number={15}
              setFieldValue={setH215}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h215}
              error={isH2NextClicked && !h215 && "*Wajib di isi"}
            >
              Merasa sakit, nyeri atau tegang otot?
            </Question>
            <Question
              number={16}
              setFieldValue={setH216}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h216}
              error={isH2NextClicked && !h216 && "*Wajib di isi"}
            >
              Merasa gelisah, tidak bisa santai?
            </Question>
            <Question
              number={17}
              setFieldValue={setH217}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h217}
              error={isH2NextClicked && !h217 && "*Wajib di isi"}
            >
              Merasa pikiran tegang?
            </Question>
            <Question
              number={18}
              setFieldValue={setH218}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h218}
              error={isH2NextClicked && !h218 && "*Wajib di isi"}
            >
              Merasa sulit menelan, atau kerongkongan tersumbat?
            </Question>
            <Question
              number={19}
              setFieldValue={setH219}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h219}
              error={isH2NextClicked && !h219 && "*Wajib di isi"}
            >
              Mudah kaget/terkejut?
            </Question>
            <Question
              number={20}
              setFieldValue={setH220}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h220}
              error={isH2NextClicked && !h220 && "*Wajib di isi"}
            >
              Sulit berkonsentrasi, atau merasa pikiran kosong?
            </Question>
            <Question
              number={21}
              setFieldValue={setH221}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h221}
              error={isH2NextClicked && !h221 && "*Wajib di isi"}
            >
              Merasa mudah tersinggung?
            </Question>
            <Question
              number={22}
              setFieldValue={setH222}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={h222}
              error={isH2NextClicked && !h222 && "*Wajib di isi"}
            >
              Sulit tidur karena kekhawatiran anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutH2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isH1Done) {
    return H1();
  } else if (isH1Done) {
    return H2();
  }
}

export default GangguanAnxietasMenyeluruh;
