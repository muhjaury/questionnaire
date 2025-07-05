import { Button, Card, Question } from "@/components";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Agorafobia_Type } from "./agorafobia.type";

function Agorafobia({ setIsDone = () => {} }: Agorafobia_Type) {
  const [isD1NextClicked, setIsD1NextClicked] = useState(false);
  const [isD1Done, setIsD1Done] = useState(false);
  const [isD2NextClicked, setIsD2NextClicked] = useState(false);
  const [isD2Done, setIsD2Done] = useState(false);
  const [isD3NextClicked, setIsD3NextClicked] = useState(false);
  const [isD3Done, setIsD3Done] = useState(false);
  const [isD4NextClicked, setIsD4NextClicked] = useState(false);
  const [isD4Done, setIsD4Done] = useState(false);
  const [isD5NextClicked, setIsD5NextClicked] = useState(false);
  const [d11, setD11] = useState("Iya");
  const [d12, setD12] = useState("Iya");
  const [d13, setD13] = useState("Tidak");
  const [d14, setD14] = useState("Tidak");
  const [d15, setD15] = useState("Tidak");
  const [d21, setD21] = useState("Iya");
  const [d31, setD31] = useState("Iya");
  const [d41, setD41] = useState("Iya");
  const [d51, setD51] = useState("Iya");
  const [d52, setD52] = useState("Iya");
  const [d53, setD53] = useState("Iya");
  const [d54, setD54] = useState("Iya");
  const [d55, setD55] = useState("Iya");
  const [d56, setD56] = useState("Iya");
  const [d57, setD57] = useState("Iya");
  const [d58, setD58] = useState("Iya");
  const [d59, setD59] = useState("Iya");
  const [d510, setD510] = useState("Iya");
  const [d511, setD511] = useState("Iya");
  const [d512, setD512] = useState("Iya");
  const [d513, setD513] = useState("Iya");
  const [d514, setD514] = useState("Iya");

  const dispatch = useDispatch();

  const handleLanjutD1Click = () => {
    setIsD1NextClicked(true);
    if (d11 && d12 && d13 && d14 && d15) {
      dispatch(ADD_DATA({ d1: { d11, d12, d13, d14, d15 } }));
      const countD1 = [d11, d12, d13, d14, d15].filter(
        (i) => i === "Iya"
      ).length;
      if (countD1 >= 2) {
        setIsD1Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutD2Click = () => {
    setIsD2NextClicked(true);
    if (d21) {
      dispatch(ADD_DATA({ d2: { d21 } }));
      if (d21 === "Iya") {
        setIsD2Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutD3Click = () => {
    setIsD3NextClicked(true);
    if (d31) {
      dispatch(ADD_DATA({ d3: { d31 } }));
      if (d31 === "Iya") {
        setIsD3Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutD4Click = () => {
    setIsD4NextClicked(true);
    if (d41) {
      dispatch(ADD_DATA({ d4: { d41 } }));
      if (d41 === "Iya") {
        setIsD4Done(true);
      } else {
        setIsDone(true);
      }
    }
  };

  const handleLanjutD5Click = () => {
    setIsD5NextClicked(true);
    if (
      d51 &&
      d52 &&
      d53 &&
      d54 &&
      d55 &&
      d56 &&
      d57 &&
      d58 &&
      d59 &&
      d510 &&
      d511 &&
      d512 &&
      d513 &&
      d514
    ) {
      dispatch(
        ADD_DATA({
          d5: {
            d51,
            d52,
            d53,
            d54,
            d55,
            d56,
            d57,
            d58,
            d59,
            d510,
            d511,
            d512,
            d513,
            d514,
          },
        })
      );
      const countD5 = [
        d55,
        d56,
        d57,
        d58,
        d59,
        d510,
        d511,
        d512,
        d513,
        d514,
      ].filter((i) => i === "Iya").length;
      if ([d51, d52, d53, d54].some((i) => i === "Iya") && countD5 >= 2) {
        dispatch(ADD_DATA({ dResult: "Agorafobia" }));
      }
      setIsDone(true);
    }
  };

  const D1 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">
              Apakah anda merasa tidak nyaman di tempat atau situasi yang akan
              sulit atau memalukan jika meloloskan diri, atau pertolongan
              mungkin tidak akan diperoleh, seperti:
            </p>
            <Question
              number={1}
              setFieldValue={setD11}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d11}
              error={isD1NextClicked && !d11 && "*Wajib di isi"}
            >
              Berada dalam kerumunan atau antrian,
            </Question>
            <Question
              number={2}
              setFieldValue={setD12}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d12}
              error={isD1NextClicked && !d12 && "*Wajib di isi"}
            >
              Berada di tempat umum,
            </Question>
            <Question
              number={3}
              setFieldValue={setD13}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d13}
              error={isD1NextClicked && !d13 && "*Wajib di isi"}
            >
              Berada seorang diri jauh dari rumah,
            </Question>
            <Question
              number={4}
              setFieldValue={setD14}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d14}
              error={isD1NextClicked && !d14 && "*Wajib di isi"}
            >
              Bepergian dengan bis, kereta api atau mobil,
            </Question>
            <Question
              number={5}
              setFieldValue={setD15}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d15}
              error={isD1NextClicked && !d15 && "*Wajib di isi"}
            >
              Atau dalam suasana lain (lift,...) ?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutD1Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const D2 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setD21}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d21}
              error={isD2NextClicked && !d21 && "*Wajib di isi"}
            >
              Apakah anda sangat takut terhadap tempat/situasi ini sehingga anda
              menghindarinya atau menghadapinya dengan ketegangan berat/hebat?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutD2Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const D3 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setD31}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d31}
              error={isD3NextClicked && !d31 && "*Wajib di isi"}
            >
              Apakah anda pikir bahwa ketakutan ini tak beralasan atau
              berlebihan?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutD3Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const D4 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <Question
              number={1}
              setFieldValue={setD41}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d41}
              error={isD4NextClicked && !d41 && "*Wajib di isi"}
            >
              Apakah ketakutan ini mengganggu pekerjaan anda, kegiatan
              sehari-hari atau fungsi sosial, atau menimbulkan ketegangan hebat?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutD4Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  const D5 = () => {
    return (
      <>
        <Card>
          <p className="text-center font-bold text-3xl md:text-5xl mb-8">
            Psikotes
          </p>
          <div className="flex flex-col gap-4">
            <p className="md:text-xl">
              Ketika anda berada dalam salah satu situasi di atas, apakah anda
              kadang-kadang:
            </p>
            <Question
              number={1}
              setFieldValue={setD51}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d51}
              error={isD5NextClicked && !d51 && "*Wajib di isi"}
            >
              Merasa denyut jantung tak teratur, cepat atau berdebar keras?
            </Question>
            <Question
              number={2}
              setFieldValue={setD52}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d52}
              error={isD5NextClicked && !d52 && "*Wajib di isi"}
            >
              Berkeringat?
            </Question>
            <Question
              number={3}
              setFieldValue={setD53}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d53}
              error={isD5NextClicked && !d53 && "*Wajib di isi"}
            >
              Gemetar atau bergetar?
            </Question>
            <Question
              number={4}
              setFieldValue={setD54}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d54}
              error={isD5NextClicked && !d54 && "*Wajib di isi"}
            >
              Merasa mulut kering?
            </Question>
            <Question
              number={5}
              setFieldValue={setD55}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d55}
              error={isD5NextClicked && !d55 && "*Wajib di isi"}
            >
              Mengalami kesulitan bernafas?
            </Question>
            <Question
              number={6}
              setFieldValue={setD56}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d56}
              error={isD5NextClicked && !d56 && "*Wajib di isi"}
            >
              Merasa tercekik?
            </Question>
            <Question
              number={7}
              setFieldValue={setD57}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d57}
              error={isD5NextClicked && !d57 && "*Wajib di isi"}
            >
              Merasa nyeri, tertekan atau tidak enak di dada?
            </Question>
            <Question
              number={8}
              setFieldValue={setD58}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d58}
              error={isD5NextClicked && !d58 && "*Wajib di isi"}
            >
              Mengalami mual atau gangguan perut?
            </Question>
            <Question
              number={9}
              setFieldValue={setD59}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d59}
              error={isD5NextClicked && !d59 && "*Wajib di isi"}
            >
              Kepala pusing, sempoyongan, melayang atau pingsan?
            </Question>
            <Question
              number={10}
              setFieldValue={setD510}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d510}
              error={isD5NextClicked && !d510 && "*Wajib di isi"}
            >
              Merasa asing dengan sekeliling anda atau asing dengan bagian tubuh
              anda?
            </Question>
            <Question
              number={11}
              setFieldValue={setD511}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d511}
              error={isD5NextClicked && !d511 && "*Wajib di isi"}
            >
              Takut bahwa anda akan menjadi gila, kehilangan kendali atau
              pingsan?
            </Question>
            <Question
              number={12}
              setFieldValue={setD512}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d512}
              error={isD5NextClicked && !d512 && "*Wajib di isi"}
            >
              Takut bahwa anda akan mati?
            </Question>
            <Question
              number={13}
              setFieldValue={setD513}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d513}
              error={isD5NextClicked && !d513 && "*Wajib di isi"}
            >
              Mengalami kilatan panas atau kedinginan?
            </Question>
            <Question
              number={14}
              setFieldValue={setD514}
              firstValue="Iya"
              secondValue="Tidak"
              selectedValue={d514}
              error={isD5NextClicked && !d514 && "*Wajib di isi"}
            >
              Merasa kesemutan atau baal pada bagian tubuh anda?
            </Question>
          </div>
        </Card>
        <div
          className="flex justify-end w-full max-w-300"
          data-aos="fade-right"
        >
          <Button onClick={handleLanjutD5Click}>Lanjut</Button>
        </div>
      </>
    );
  };

  if (!isD1Done) {
    return D1();
  } else if (isD1Done && !isD2Done) {
    return D2();
  } else if (isD2Done && !isD3Done) {
    return D3();
  } else if (isD3Done && !isD4Done) {
    return D4();
  } else if (isD4Done) {
    return D5();
  }
}

export default Agorafobia;
