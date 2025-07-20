import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Sosialfobia_Type } from "./sosialfobia.type";

function Sosialfobia({ setIsDone = () => {} }: Sosialfobia_Type) {
  const [isF1NextClicked, setIsF1NextClicked] = useState(false);
  const [isF1Done, setIsF1Done] = useState(false);
  const [isF2NextClicked, setIsF2NextClicked] = useState(false);
  const [isF2Done, setIsF2Done] = useState(false);
  const [isF3NextClicked, setIsF3NextClicked] = useState(false);
  const [isF3Done, setIsF3Done] = useState(false);
  const [isF4NextClicked, setIsF4NextClicked] = useState(false);
  const [isF4Done, setIsF4Done] = useState(false);
  const [isF5NextClicked, setIsF5NextClicked] = useState(false);
  const [f11, setF11] = useState("");
  const [f21, setF21] = useState("");
  const [f31, setF31] = useState("");
  const [f41, setF41] = useState("");
  const [f42, setF42] = useState("");
  const [f43, setF43] = useState("");
  const [f51, setF51] = useState("");
  const [f52, setF52] = useState("");
  const [f53, setF53] = useState("");
  const [f54, setF54] = useState("");
  const [f55, setF55] = useState("");
  const [f56, setF56] = useState("");
  const [f57, setF57] = useState("");
  const [f58, setF58] = useState("");
  const [f59, setF59] = useState("");
  const [f510, setF510] = useState("");
  const [f511, setF511] = useState("");
  const [f512, setF512] = useState("");
  const [f513, setF513] = useState("");
  const [f514, setF514] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLanjutF1Click = () => {
    setIsF1NextClicked(true);
    if (f11) {
      dispatch(ADD_DATA({ f1: { f11 } }));
      if (f11 === "Iya") {
        setIsF1Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutF2Click = () => {
    setIsF2NextClicked(true);
    if (f21) {
      dispatch(ADD_DATA({ f2: { f21 } }));
      if (f21 === "Iya") {
        setIsF2Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutF3Click = () => {
    setIsF3NextClicked(true);
    if (f31) {
      dispatch(ADD_DATA({ f3: { f31 } }));
      if (f31 === "Iya") {
        setIsF3Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutF4Click = () => {
    setIsF4NextClicked(true);
    if (f41 && f42 && f43) {
      dispatch(ADD_DATA({ f4: { f41, f42, f43 } }));
      if ([f41, f42, f43].some((i) => i === "Iya")) {
        setIsF4Done(true);
      } else {
        setIsDone(true);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLanjutF5Click = () => {
    setIsF5NextClicked(true);
    if (
      f51 &&
      f52 &&
      f53 &&
      f54 &&
      f55 &&
      f56 &&
      f57 &&
      f58 &&
      f59 &&
      f510 &&
      f511 &&
      f512 &&
      f513 &&
      f514
    ) {
      dispatch(
        ADD_DATA({
          f5: {
            f51,
            f52,
            f53,
            f54,
            f55,
            f56,
            f57,
            f58,
            f59,
            f510,
            f511,
            f512,
            f513,
            f514,
          },
        })
      );
      const countF5 = [
        f55,
        f56,
        f57,
        f58,
        f59,
        f510,
        f511,
        f512,
        f513,
        f514,
      ].filter((i) => i === "Iya").length;
      if ([f51, f52, f53, f54].some((i) => i === "Iya") && countF5 >= 2) {
        dispatch(ADD_DATA({ fResult: "Sosialfobia" }));
      }
      setIsDone(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const F1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Sosialfobia
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setF11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f11}
              error={isF1NextClicked && !f11 && "*Wajib di isi"}
            >
              Apakah anda takut atau malu menjadi fokus/pusat perhatian atau
              takut dipermalukan pada situasi sosial? Hal ini mencakup hal
              seperti berbicara di depan umum, menggunakan WC umum, menulis
              sambil diawasi orang. Atau apakah anda menghindar untuk berada
              dalam situasi sosial demikian?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutF1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const F2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Sosialfobia
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setF21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f21}
              error={isF2NextClicked && !f21 && "*Wajib di isi"}
            >
              Apakah ketakutan ini berlebihan atau tak beralasan?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutF2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const F3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Sosialfobia
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setF31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f31}
              error={isF3NextClicked && !f31 && "*Wajib di isi"}
            >
              Apakah ketakutan ini mengganggu pekerjaan sehari-hari, kegiatan
              seharihari atau fungsi sosial anda atau menimbulkan ketegangan
              hebat?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutF3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const F4 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Sosialfobia
          </p>
          <p className="md:text-xl">
            Jika anda berada dalam satu situasi demikian, apakah anda
            kadangkadang:
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setF41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f41}
              error={isF4NextClicked && !f41 && "*Wajib di isi"}
            >
              Mukanya merah atau gemetar?
            </Question>
            <Question
              number={2}
              setFieldValue={setF42}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f42}
              error={isF4NextClicked && !f42 && "*Wajib di isi"}
            >
              Merasa ingin muntah?
            </Question>
            <Question
              number={3}
              setFieldValue={setF43}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f43}
              error={isF4NextClicked && !f43 && "*Wajib di isi"}
            >
              Merasa malu atau takut bila mendadak harus pergi ke toilet?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutF4Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const F5 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-2xl md:text-4xl mb-8">
            Sosialfobia
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">
              Jika anda berada dalam satu situasi demikian, apakah anda
              kadangkadang:
            </p>
            <Question
              number={1}
              setFieldValue={setF51}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f51}
              error={isF5NextClicked && !f51 && "*Wajib di isi"}
            >
              Merasa denyut jantung tak teratur, cepat atau berdebar keras?
            </Question>
            <Question
              number={2}
              setFieldValue={setF52}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f52}
              error={isF5NextClicked && !f52 && "*Wajib di isi"}
            >
              Berkeringat?
            </Question>
            <Question
              number={3}
              setFieldValue={setF53}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f53}
              error={isF5NextClicked && !f53 && "*Wajib di isi"}
            >
              Gemetar atau bergetar?
            </Question>
            <Question
              number={4}
              setFieldValue={setF54}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f54}
              error={isF5NextClicked && !f54 && "*Wajib di isi"}
            >
              Merasa mulut kering?
            </Question>
            <Question
              number={5}
              setFieldValue={setF55}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f55}
              error={isF5NextClicked && !f55 && "*Wajib di isi"}
            >
              Mengalami kesulitan bernafas?
            </Question>
            <Question
              number={6}
              setFieldValue={setF56}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f56}
              error={isF5NextClicked && !f56 && "*Wajib di isi"}
            >
              Merasa tercekik?
            </Question>
            <Question
              number={7}
              setFieldValue={setF57}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f57}
              error={isF5NextClicked && !f57 && "*Wajib di isi"}
            >
              Merasa nyeri, tertekan atau tidak enak di dada?
            </Question>
            <Question
              number={8}
              setFieldValue={setF58}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f58}
              error={isF5NextClicked && !f58 && "*Wajib di isi"}
            >
              Mengalami mual atau gangguan perut?
            </Question>
            <Question
              number={9}
              setFieldValue={setF59}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f59}
              error={isF5NextClicked && !f59 && "*Wajib di isi"}
            >
              Kepala pusing, sempoyongan, melayang atau pingsan?
            </Question>
            <Question
              number={10}
              setFieldValue={setF510}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f510}
              error={isF5NextClicked && !f510 && "*Wajib di isi"}
            >
              Merasa asing dengan sekeliling anda atau asing dengan bagian tubuh
              anda?
            </Question>
            <Question
              number={11}
              setFieldValue={setF511}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f511}
              error={isF5NextClicked && !f511 && "*Wajib di isi"}
            >
              Takut bahwa anda akan menjadi gila, kehilangan kendali atau
              pingsan?
            </Question>
            <Question
              number={12}
              setFieldValue={setF512}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f512}
              error={isF5NextClicked && !f512 && "*Wajib di isi"}
            >
              Takut bahwa anda akan mati?
            </Question>
            <Question
              number={13}
              setFieldValue={setF513}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f513}
              error={isF5NextClicked && !f513 && "*Wajib di isi"}
            >
              Mengalami kilatan panas atau kedinginan?
            </Question>
            <Question
              number={14}
              setFieldValue={setF514}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={f514}
              error={isF5NextClicked && !f514 && "*Wajib di isi"}
            >
              Merasa kesemutan atau baal pada bagian tubuh anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutF5Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isF1Done) {
    return F1();
  } else if (isF1Done && !isF2Done) {
    return F2();
  } else if (isF2Done && !isF3Done) {
    return F3();
  } else if (isF3Done && !isF4Done) {
    return F4();
  } else if (isF4Done) {
    return F5();
  }
}

export default Sosialfobia;
