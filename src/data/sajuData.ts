export interface SajuCell {
  value: string;
  subValue?: string;
  color?: "black" | "red" | "teal" | "white";
  type?: "normal" | "box";
  korean?: string;
}

export interface SajuRow {
  title: {
    text: string;
    subText: string;
  };
  cells: SajuCell[];
}

export const headers = ["時", "日", "月", "年"] as const;

export const TranslateKorean: { [key: string]: string } = {
  壬: "임",
  丁: "정",
  癸: "계",
  黃: "인",
  己: "사",
  亥: "해",
  西: "유",
};

export const sajuData: SajuRow[] = [
  {
    title: { text: "十星", subText: "십성" },
    cells: [
      { value: "傷官", subValue: "(상관)", type: "normal" },
      { value: "比肩", subValue: "(비견)", type: "normal" },
      { value: "傷官", subValue: "(상관)", type: "normal" },
      { value: "傷官", subValue: "(상관)", type: "normal" },
    ],
  },
  {
    title: { text: "天干", subText: "천간" },
    cells: [
      {
        value: "壬",
        subValue: "陽水",
        type: "box",
        color: "black",
        korean: "임",
      },
      {
        value: "丁",
        subValue: "陰火",
        type: "box",
        color: "red",
        korean: "정",
      },
      {
        value: "癸",
        subValue: "陰水",
        type: "box",
        color: "black",
        korean: "계",
      },
      {
        value: "癸",
        subValue: "陰水",
        type: "box",
        color: "black",
        korean: "계",
      },
    ],
  },
  {
    title: { text: "地支", subText: "지지" },
    cells: [
      {
        value: "黃",
        subValue: "陽木",
        type: "box",
        color: "teal",
        korean: "황",
      },
      {
        value: "己",
        subValue: "陰火",
        type: "box",
        color: "red",
        korean: "기",
      },
      {
        value: "亥",
        subValue: "陰水",
        type: "box",
        color: "black",
        korean: "해",
      },
      {
        value: "西",
        subValue: "陰金",
        type: "box",
        color: "white",
        korean: "서",
      },
    ],
  },
  {
    title: { text: "十星", subText: "십성" },
    cells: [
      { value: "比肩", subValue: "(비견)", type: "normal" },
      { value: "劫財", subValue: "(겁재)", type: "normal" },
      { value: "食神", subValue: "(식신)", type: "normal" },
      { value: "偏財", subValue: "(편재)", type: "normal" },
    ],
  },
  {
    title: { text: "十二運星", subText: "십이운성" },
    cells: [
      { value: "死", subValue: "(사)", type: "normal" },
      { value: "帝旺", subValue: "(제왕)", type: "normal" },
      { value: "胎", subValue: "(태)", type: "normal" },
      { value: "長生", subValue: "(장생)", type: "normal" },
    ],
  },
  {
    title: { text: "十二神殺", subText: "십이신살" },
    cells: [
      { value: "劫殺", subValue: "(겁살)", type: "normal" },
      { value: "地殺", subValue: "(지살)", type: "normal" },
      { value: "驛馬殺", subValue: "(역마살)", type: "normal" },
      { value: "將星殺", subValue: "(장성살)", type: "normal" },
    ],
  },
  {
    title: { text: "貴人", subText: "귀인" },
    cells: [
      { value: "", subValue: "(없음)", type: "normal" },
      { value: "", subValue: "(없음)", type: "normal" },
      { value: "天乙", subValue: "(천을귀인)", type: "normal" },
      {
        value: "天乙\n太極\n文昌",
        subValue: "(천을귀인)\n(태극귀인)\n(문창귀인)",
        type: "normal",
      },
    ],
  },
];
