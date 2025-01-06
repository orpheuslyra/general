import employeeImage from "@/assets/mission/employee.png";
import benefitsImage from "@/assets/mission/benefits.png";
import capitalImage from "@/assets/mission/capital.png";

export type missionData = {
  title: string;
  description: string;
  imagePath: ImageMetadata;
};

export const missions: missionData[] = [
  {
    title: "労働力不足",
    description:
      "社労士法人で培った専門性と情報技術の進歩を活用し、企業の給与・総務業務の安定化・自動化・最小化でコア業務集中を実現。",
    imagePath: employeeImage,
  },
  {
    title: "福利厚生と資産形成",
    description:
      "給与総務データを経営や従業員資産形成に活用し、金融リテラシーの向上、企業の経営課題を解決。",
    imagePath: benefitsImage,
  },
  {
    title: "人的資本経営",
    description:
      "ワーケーションの推進により地方地域の働きやすい就業環境と雇用の確保を実現。",
    imagePath: capitalImage,
  },
];
