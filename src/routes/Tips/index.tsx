"use client";

import { Card } from "@/components";
import CoreLayout from "@/layout/CoreLayout";

function Tips() {
  return (
    <CoreLayout>
      <Card>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl md:text-4xl mb-2">
            Cara Efektif Menjaga Kesehatan Mental
          </p>
          <p className="text-lg md:text-xl mb-2">
            Berikut adalah beberapa tips yang bisa dilakukan dalam memperbaiki
            kesehatan jiwa Anda:
          </p>
          <p className="text-lg md:text-xl mb-2">
            1. Terapkan Pola Hidup Sehat
          </p>
          <ul className="list-disc pl-10">
            <li className="text-lg md:text-xl mb-2">
              Perhatikan asupan makanan: Hindari makanan dan minuman yang dapat
              memperburuk suasana hati, seperti kafein, alkohol, dan makanan
              tinggi gula. Sebaliknya, konsumsi makanan bergizi seimbang, kaya
              vitamin dan mineral, terutama yang mengandung omega-3, vitamin D,
              dan magnesium.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Olahraga teratur: Aktivitas fisik, bahkan olahraga ringan seperti
              jalan kaki, dapat membantu meredakan stres dan memperbaiki suasana
              hati.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Tidur yang cukup: Pastikan Anda mendapatkan waktu tidur yang cukup
              dan berkualitas, karena kurang tidur dapat memperburuk gejala
              gangguan kesehatan mental Anda.
            </li>
          </ul>
          <p className="text-lg md:text-xl mb-2">
            2. Lakukan Aktivitas yang Disukai
          </p>
          <ul className="list-disc pl-10">
            <li className="text-lg md:text-xl mb-2">
              Lakukan hobi secara rutin: Luangkan waktu untuk melakukan kegiatan
              yang Anda sukai, seperti membaca buku, berkebun, memasak, atau
              aktivitas kreatif lainnya. Hal ini dapat membantu mengurangi stres
              dan memperbaiki suasana hati.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Habiskan waktu bersama orang tersayang: Interaksi sosial dan
              dukungan dari orang-orang terdekat dapat memberikan efek positif
              pada kesehatan mental.
            </li>
          </ul>
          <p className="text-lg md:text-xl mb-2">
            3. Kelola perasaan dan kendalikan pikiran agar tidak stres
          </p>
          <ul className="list-disc pl-10">
            <li className="text-lg md:text-xl mb-2">
              Latihan pernapasan: Teknik pernapasan dalam dan lambat dapat
              membantu menenangkan pikiran dan tubuh.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Meditasi atau yoga atau mindfulness: Latihan meditasi dan yoga
              atau mindfulness secara teratur dapat membantu mengurangi stres
              dan meningkatkan kesadaran diri.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Berpikir positif: Cobalah untuk fokus pada hal-hal positif dalam
              hidup dan mengubah pola pikir negatif menjadi positif.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Tulis jurnal (jurnaling): Menuliskan perasaan dan pikiran dalam
              jurnal dapat menjadi cara untuk melepaskan beban emosional dan
              meredakan stres.
            </li>
          </ul>
          <p className="text-lg md:text-xl mb-2">4. Cari Bantuan Profesional</p>
          <ul className="list-disc pl-10">
            <li className="text-lg md:text-xl mb-2">
              Konsultasi dengan psikiater maupun psikolog: Jika gangguan mental
              yang Anda rasakan sudah mengganggu aktivitas sehari-hari, segera
              konsultasikan dengan profesional kesehatan mental seperti
              Psikiater maupun Psikolog. Mereka dapat memberikan diagnosis yang
              tepat dan membantu Anda menemukan penanganan yang sesuai.
            </li>
            <li className="text-lg md:text-xl mb-2">
              Jangan ragu mencari bantuan: Jangan biarkan masalah kesehatan
              mental berlarut-larut. Mencari bantuan profesional adalah langkah
              yang tepat untuk mendapatkan dukungan dan penanganan
              yang dibutuhkan.
            </li>
          </ul>
        </div>
      </Card>
    </CoreLayout>
  );
}

export default Tips;
