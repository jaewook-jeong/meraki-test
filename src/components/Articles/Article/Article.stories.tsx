import { Wrapper } from '../styled';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Article, { Props } from './index';
import 'global.css';

const meta = {
  title: 'Components/Article',
  component: Article,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Star: Story = {
  args: {
    isScraped: true,
    headline: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
    byline: '김정확 기자',
    source: '조선일보',
    id: '1',
    pub_date: '2021.3.15',
    url: 'https://www.naver.com',
  },
};

export const TooMuchText: Story = {
  args: {
    isScraped: true,
    headline:
      '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
    byline: '김정확 기자 김정확 기자',
    source: '조선일보 산하 어떤 부서',
    id: '1',
    pub_date: '2021.3.15',
    url: 'https://www.naver.com',
  },
};

const MultipleArticle: StoryFn<Props> = (args) => (
  <div id="root">
    <Wrapper>
      <Article {...args} />
      <Article {...args} />
      <Article {...args} />
    </Wrapper>
  </div>
);

export const WithWrapper = MultipleArticle.bind({});
WithWrapper.args = {
  isScraped: true,
  headline: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
  byline: '김정확 기자',
  source: '조선일보',
  id: '1',
  pub_date: '2021.3.15',
  url: 'https://www.naver.com',
};
