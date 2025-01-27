export type newsData = {
  date: Date;
  title: string;
  link?: URL;
};

export const newslist: newsData[] = [
  {
    date: new Date(2025, 1, 28),
    title: "WEBサイトを公開しました。",
  },
];
