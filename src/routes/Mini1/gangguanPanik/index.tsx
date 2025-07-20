import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GangguanPanik_Type } from "./gangguanPanik.type";

function GangguanPanik({ setIsDone = () => {} }: GangguanPanik_Type) {
  const [isE1NextClicked, setIsE1NextClicked] = useState(false);
  const [isE1Done, setIsE1Done] = useState(false);
  const [isE2NextClicked, setIsE2NextClicked] = useState(false);
  const [isE2Done, setIsE2Done] = useState(false);
  const [isE3NextClicked, setIsE3NextClicked] = useState(false);
  const [isE3Done, setIsE3Done] = useState(false);
  const [isE4NextClicked, setIsE4NextClicked] = useState(false);
  const [isE4Done, setIsE4Done] = useState(false);
  const [isE5NextClicked, setIsE5NextClicked] = useState(false);
  const [e11, setE11] = useState("");
  const [e21, setE21] = useState("");
  const [e31, setE31] = useState("");
  const [e32, setE32] = useState("");
  const [e33, setE33] = useState("");
  const [e34, setE34] = useState("");
  const [e35, setE35] = useState("");
  const [e36, setE36] = useState("");
  const [e37, setE37] = useState("");
  const [e38, setE38] = useState("");
  const [e39, setE39] = useState("");
  const [e310, setE310] = useState("");
  const [e311, setE311] = useState("");
  const [e312, setE312] = useState("");
  const [e313, setE313] = useState("");
  const [e314, setE314] = useState("");
  const [e41, setE41] = useState("");

  const dispatch = useDispatch();
  const dataFromRedux = useSelector((state: any) => state.data);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutE1Click = () => {
    setIsE1NextClicked(true);
    if (e11) {
      dispatch(ADD_DATA({ e1: { e11 } }));
      if (e11 === "Iya") {
        setIsE1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutE2Click = () => {
    setIsE2NextClicked(true);
    if (e21) {
      dispatch(ADD_DATA({ e2: { e21 } }));
      if (e21 === "Iya") {
        setIsE2Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutE3Click = () => {
    setIsE3NextClicked(true);
    if (
      e31 &&
      e32 &&
      e33 &&
      e34 &&
      e35 &&
      e36 &&
      e37 &&
      e38 &&
      e39 &&
      e310 &&
      e311 &&
      e312 &&
      e313 &&
      e314
    ) {
      dispatch(
        ADD_DATA({
          e3: {
            e31,
            e32,
            e33,
            e34,
            e35,
            e36,
            e37,
            e38,
            e39,
            e310,
            e311,
            e312,
            e313,
            e314,
          },
        })
      );
      const countE3 = [
        e35,
        e36,
        e37,
        e38,
        e39,
        e310,
        e311,
        e312,
        e313,
        e314,
      ].filter((i) => i === "Iya").length;
      if ([e31, e32, e33, e34].some((i) => i === "Iya") && countE3 >= 4) {
        dispatch(ADD_DATA({ eResult: "Gangguan Panik" }));
        if (dataFromRedux?.dResult) {
          setIsE3Done(true);
        } else {
          setIsDone(true);
        }
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutE4Click = () => {
    setIsE4NextClicked(true);
    if (e41) {
      dispatch(ADD_DATA({ e4: { e41 } }));
      if (e41 === "Iya") {
        dispatch(ADD_DATA({ eResult: "Agorafobia dengan Gangguan Panik" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const E1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Panik
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setE11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e11}
              error={isE1NextClicked && !e11 && "*Wajib di isi"}
            >
              Apakah anda sering mendapat serangan mendadak merasa cemas, takut,
              tidak tenang atau tidak nyaman dalam suatu situasi yang orang lain
              tidak merasakan demikian?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutE1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const E2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Panik
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setE21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e21}
              error={isE2NextClicked && !e21 && "*Wajib di isi"}
            >
              Apakah serangan tersebut datang secara tak terduga?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutE2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const E3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Panik
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">
              Selama serangan terburuk yang bisa anda ingat, apakah anda:
            </p>
            <Question
              number={1}
              setFieldValue={setE31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e31}
              error={isE3NextClicked && !e31 && "*Wajib di isi"}
            >
              Merasa denyut jantung tak teratur, cepat atau berdebar keras?
            </Question>
            <Question
              number={2}
              setFieldValue={setE32}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e32}
              error={isE3NextClicked && !e32 && "*Wajib di isi"}
            >
              Berkeringat?
            </Question>
            <Question
              number={3}
              setFieldValue={setE33}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e33}
              error={isE3NextClicked && !e33 && "*Wajib di isi"}
            >
              Gemetar atau bergetar?
            </Question>
            <Question
              number={4}
              setFieldValue={setE34}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e34}
              error={isE3NextClicked && !e34 && "*Wajib di isi"}
            >
              Merasa mulut kering?
            </Question>
            <Question
              number={5}
              setFieldValue={setE35}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e35}
              error={isE3NextClicked && !e35 && "*Wajib di isi"}
            >
              Kesulitan bernapas?
            </Question>
            <Question
              number={6}
              setFieldValue={setE36}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e36}
              error={isE3NextClicked && !e36 && "*Wajib di isi"}
            >
              Merasa tercekik?
            </Question>
            <Question
              number={7}
              setFieldValue={setE37}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e37}
              error={isE3NextClicked && !e37 && "*Wajib di isi"}
            >
              Merasa nyeri, tertekan atau tidak enak di dada?
            </Question>
            <Question
              number={8}
              setFieldValue={setE38}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e38}
              error={isE3NextClicked && !e38 && "*Wajib di isi"}
            >
              Mengalami mual atau gangguan perut?
            </Question>
            <Question
              number={9}
              setFieldValue={setE39}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e39}
              error={isE3NextClicked && !e39 && "*Wajib di isi"}
            >
              Kepala pusing, sempoyongan, melayang atau pingsan?
            </Question>
            <Question
              number={10}
              setFieldValue={setE310}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e310}
              error={isE3NextClicked && !e310 && "*Wajib di isi"}
            >
              Merasa asing dengan sekeliling anda atau asing dengan bagian tubuh
              anda?
            </Question>
            <Question
              number={11}
              setFieldValue={setE311}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e311}
              error={isE3NextClicked && !e311 && "*Wajib di isi"}
            >
              Takut bahwa anda akan menjadi gila, kehilangan kendali atau
              pingsan?
            </Question>
            <Question
              number={12}
              setFieldValue={setE312}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e312}
              error={isE3NextClicked && !e312 && "*Wajib di isi"}
            >
              Takut bahwa anda akan mati?
            </Question>
            <Question
              number={13}
              setFieldValue={setE313}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e313}
              error={isE3NextClicked && !e313 && "*Wajib di isi"}
            >
              Mengalami kilatan panas atau kedinginan?
            </Question>
            <Question
              number={14}
              setFieldValue={setE314}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e314}
              error={isE3NextClicked && !e314 && "*Wajib di isi"}
            >
              Merasa kesemutan atau baal pada bagian tubuh anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutE3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const E4 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Gangguan Panik
          </p>
          <p className="md:text-xl">
            Anda mengatakan bahwa anda terutama tidak nyaman dalam situasi
            seperti:
          </p>
          {dataFromRedux?.dResult && (
            <ul className="list-disc pl-5">
              {Object.keys(dataFromRedux?.d1)
                .map((key, index) => {
                  if (dataFromRedux?.d1[key] === "Tidak") {
                    return;
                  }
                  return (
                    <li key={index} className="md:text-xl">
                      {key === "d11" && "Berada dalam kerumunan atau antrian"}
                      {key === "d12" && "Berada di tempat umum"}
                      {key === "d13" && "Berada seorang diri jauh dari rumah"}
                      {key === "d14" &&
                        "Bepergian dengan bis, kereta api atau mobil"}
                      {key === "d15" && "Atau dalam suasana lain (lift,...)"}
                    </li>
                  );
                })
                .filter((i) => i)}
            </ul>
          )}
          <div className="flex flex-col gap-4 mt-4">
            <Question
              setFieldValue={setE41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={e41}
              error={isE4NextClicked && !e41 && "*Wajib di isi"}
            >
              Apakah serangan yang baru saja kita uraikan terjadi hanya pada
              situasi tersebut?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutE4Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isE1Done) {
    return E1();
  } else if (isE1Done && !isE2Done) {
    return E2();
  } else if (isE2Done && !isE3Done) {
    return E3();
  } else if (isE3Done) {
    return E4();
  }
}

export default GangguanPanik;
