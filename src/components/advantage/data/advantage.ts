import experienceImage from "@/assets/advantage/experience.jpg";
import aidevelopImage from "@/assets/advantage/aidevelop.jpg";
import threeswordImage from "@/assets/advantage/threesword.jpg";

export type advantageData = {
  title: string;
  description: string;
  imagePath: ImageMetadata;
};

export const advantages: advantageData[] = [
  {
    title: "社労士法人の経験と実績",
    description:
      "日本有数規模の社労士事務所が培ってきた、適法・精密な給与計算ノウハウを活用。",
    imagePath: experienceImage,
  },
  {
    title: "AI開発力",
    description:
      "豊富な給与パターンを知り尽くした専門家が、会社ごとの特徴に合わせたAIを開発。",
    imagePath: aidevelopImage,
  },
  {
    title: "業界随一の3刀流",
    description:
      "ルール・システム・運用を企画から実行までを全て対応、企業の非コア最小化を実現。",
    imagePath: threeswordImage,
  },
];
