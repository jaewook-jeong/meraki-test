import { Nation } from "types/nation";

export const NATIONAL: { [K in Nation]: string } = {
  'South Korea': '대한민국',
  'China': '중국',
  'Japan': '일본',
  'USA': '미국',
  'North Korea': '북한',
  'Russia': '러시아',
  'France': '프랑스',
  'UK': '영국',
};

export const NATION_LIST: Nation[] = ['South Korea', 'China', 'Japan', 'USA', 'North Korea', 'Russia', 'France', 'UK'];