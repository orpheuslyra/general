import defaultImage from "@/assets/member/defaultImage.png";
import imadaPhoto from "@/assets/member/imada.jpg"; 
import kimotoPhoto from "@/assets/member/kimoto.jpg";
import teramotoPhoto from "@/assets/member/teramoto.jpg";
import banPhoto from "@/assets/member/ban.jpg";
import ogasawaraPhoto from "@/assets/member/ogasawara.jpg";
import kanedaPhoto from "@/assets/member/kaneda.jpg";
import suehiroPhoto from "@/assets/member/suehiro.jpg";
import satoPhoto from "@/assets/member/sato.jpg";

export type memberData = {
  imagePath: ImageMetadata;
  post?: string;
  firstName: string;
  secondName: string;
  company: string;
  role?: string;
};

export const memberList: memberData[] = [
  {
    imagePath: imadaPhoto,
    post: "代表取締役",
    firstName: "真吾",
    secondName: "今田",
    company: "社会保険労務士法人サトー",
    role: "経営執行役員",
  },
  {
    imagePath: kimotoPhoto,
    post: "取締役",
    firstName: "美智",
    secondName: "木本",
    company: "社会保険労務士法人サトー",
    role: "代表社員",
  },
  {
    imagePath: teramotoPhoto,
    post: "取締役",
    firstName: "健太郎",
    secondName: "寺本",
    company: "TERAMOTO社会保険労務士法人",
    role: "代表社員",
  },
  {
    imagePath: banPhoto,
    post: "取締役",
    firstName: "芳夫",
    secondName: "伴",
    company: "社会保険労務士法人アドバンス",
    role: "代表社員",
  },
  {
    imagePath: ogasawaraPhoto,
    post: "取締役",
    firstName: "弓子",
    secondName: "小笠原",
    company: "社会保険労務士法人サトー",
    role: "人事執行役員",
  },
  {
    imagePath: kanedaPhoto,
    post: "取締役",
    firstName: "洸希",
    secondName: "金田",
    company: "社会保険労務士法人サトー",
    role: "コンサル部部長",
  },
  {
    imagePath: suehiroPhoto,
    post: "社外取締役",
    firstName: "彰",
    secondName: "末廣",
    company: "株式会社ハンズ",
    role: "取締役会長",
  },
  {
    imagePath: satoPhoto,
    post: "AIパートナー",
    firstName: "洋介",
    secondName: "佐藤",
    company: "SVSS株式会社",
    role: "代表取締役",
  },
];
