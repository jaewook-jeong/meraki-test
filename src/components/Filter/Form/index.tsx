import ReactDatePicker from 'react-datepicker';
import * as Styled from './styled';
import { useState } from 'react';
import CustomInput from './CustomInput';
import 'react-datepicker/dist/react-datepicker.css';
import { NATIONAL, NATION_LIST } from '@constants/NATIONAL';

const FilterForm = ({ onClose }: { onClose: () => void }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <div>헤드라인</div>
        <Styled.Input placeholder="검색하실 헤드라인을 입력해주세요." />
      </Styled.InputBox>
      <Styled.InputBox>
        <div>날짜</div>
        <ReactDatePicker
          fixedHeight
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="날짜를 선택해주세요."
          customInput={<CustomInput placeholder="날짜를 선택해주세요." />}
        />
      </Styled.InputBox>
      <Styled.InputBox>
        <div>국가</div>
        <Styled.NationSelectBox>
          {NATION_LIST.map((n) => (
            <Styled.NationButton $selected>{NATIONAL[n]}</Styled.NationButton>
          ))}
        </Styled.NationSelectBox>
      </Styled.InputBox>
      <Styled.ApplyButton onClick={onClose}>필터 적용하기</Styled.ApplyButton>
    </Styled.Wrapper>
  );
};

export default FilterForm;
