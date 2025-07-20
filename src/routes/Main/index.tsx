"use client";

import { Button, Card } from "@/components";
import { urls } from "@/constant/path";
import CoreLayout from "@/layout/CoreLayout";
import { ADD_DATA } from "@/redux/slices/dataSlice";
import { DatePicker, Input, Radio } from "antd";
import { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./assets/style.css";
import { Error, FieldWrapper, InputLabel } from "./main.styled";

function Main() {
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState<Dayjs>();
  const [pekerjaan, setPekerjaan] = useState("");
  const [asalKota, setAsalKota] = useState("");
  const [pernahPsikiater, setPernahPsikiater] = useState("");
  const [isNextClicked, setIsNextClicked] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLanjutClick = () => {
    setIsNextClicked(true);
    if (
      jenisKelamin &&
      tanggalLahir &&
      pekerjaan &&
      asalKota &&
      pernahPsikiater
    ) {
      dispatch(ADD_DATA({ start: true }));
      router.push(urls.PANDUAN);
    }
  };

  return (
    <CoreLayout noRedirect>
      <Card>
        <p className="text-center font-bold text-2xl md:text-4xl mb-8">
          Psikotes
        </p>
        <p className="text-lg md:text-xl mb-8">
          <b>Assalamu'alaikum warahmatullahi wabarakatuh dan selamat datang </b>
          di aplikasi{" "}
          <b>Skrining Kesehatan Jiwa RS.dr.Hasri Ainun Habibie Parepare</b>.
          Sebelum lanjut bisa mengisi data singkat berikut:
        </p>
        <FieldWrapper>
          <InputLabel>Jenis kelamin</InputLabel>
          <Radio.Group
            value={jenisKelamin}
            options={[
              { value: "laki-laki", label: "Laki-laki" },
              { value: "perempuan", label: "Perempuan" },
            ]}
            onChange={(e) => setJenisKelamin(e.target.value ?? "")}
            style={{ fontSize: "24px !important" }}
          />
          {isNextClicked && !jenisKelamin && <Error>*Wajib diisi</Error>}
        </FieldWrapper>
        <FieldWrapper>
          <InputLabel>Tanggal lahir</InputLabel>
          <DatePicker
            value={tanggalLahir}
            onChange={(val) => setTanggalLahir(val)}
          />
          {isNextClicked && !tanggalLahir && <Error>*Wajib diisi</Error>}
        </FieldWrapper>
        <FieldWrapper>
          <InputLabel>Pekerjaan</InputLabel>
          <Input
            placeholder="Pekerjaan"
            value={pekerjaan}
            onChange={(e) => setPekerjaan(e?.target?.value ?? "")}
          />
          {isNextClicked && !pekerjaan && <Error>*Wajib diisi</Error>}
        </FieldWrapper>
        <FieldWrapper>
          <InputLabel>Asal Kota</InputLabel>
          <Input
            placeholder="Asal Kota"
            value={asalKota}
            onChange={(e) => setAsalKota(e?.target?.value ?? "")}
          />
          {isNextClicked && !asalKota && <Error>*Wajib diisi</Error>}
        </FieldWrapper>
        <FieldWrapper>
          <InputLabel>Riwayat berobat ke Psikiater</InputLabel>
          <Radio.Group
            value={pernahPsikiater}
            options={[
              { value: "pernah", label: "Pernah" },
              { value: "belum-pernah", label: "Belum pernah" },
            ]}
            onChange={(e) => setPernahPsikiater(e.target.value ?? "")}
          />
          {isNextClicked && !pernahPsikiater && <Error>*Wajib diisi</Error>}
        </FieldWrapper>
      </Card>
      <div className="flex justify-end w-full max-w-300" data-aos="fade-right">
        <Button onClick={handleLanjutClick}>Lanjut</Button>
      </div>
    </CoreLayout>
  );
}

export default Main;
