import step1Image from "@/assets/service/step1_image.jpg";
import step2Image from "@/assets/service/step2_image.jpg";
import step3Image from "@/assets/service/step3_image.jpg";

export type serviceStepData = {
  title: string;
  description: string;
  imagePath: ImageMetadata;
};

export const steps: serviceStepData[] = [
  {
    title: "コンサルティング",
    description:
      "就業規則、マニュアル、勤怠・給与計算ルールを、HRシステムへの対応や適法性を考慮し最適化します。",
    imagePath: step1Image,
  },
  {
    title: "アウトソーシング",
    description:
      "社内ルールに即した給与計算ロジックをAIでアルゴリズム化。給与計算業務を効果的に進めます。",
    imagePath: step2Image,
  },
  {
    title: "運用",
    description:
      "勤怠チェックや、申請の不備・漏れに関する従業員対応も代行。社内ルール・規程の変更や法改正に伴う運用変更にも柔軟に対応します。",
    imagePath: step3Image,
  },
];
