export type newsData = {
  date: Date;
  title: string;
  link?: URL;
};

export const newslist: newsData[] = [
  {
    date: new Date(2024, 11, 1),
    title: "スタートアップイベントにおいてプレゼンテーションを行いました。",
  },
  {
    date: new Date(2024, 11, 2),
    title: "スタートアップイベントにおいてプレゼンテーションを行いました。",
    link: new URL("http://www.google.com"),
  },
  {
    date: new Date(2024, 11, 3),
    title: "スタートアップイベントにおいてプレゼンテーションを行いました。",
    link: new URL("http://www.google.com"),
  },
];
