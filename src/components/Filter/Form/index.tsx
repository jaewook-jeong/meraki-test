import ReactDatePicker from 'react-datepicker';
import * as Styled from './styled';
import { useState } from 'react';
import CustomInput from './CustomInput';
import { NATIONAL, NATION_LIST } from '@constants/NATIONAL';
import { useAppDispatch } from 'store';
import { setFilter } from 'features/filter/slice';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { RouteType } from 'types/routes';
import 'react-datepicker/dist/react-datepicker.css';
import { Nation } from 'types/nation';

const FilterForm = ({ onClose }: { onClose: () => void }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [headLine, setHeadLine] = useState('');
  const [nations, setNations] = useState<Nation[]>([]);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const onApply = () => {
    dispatch(
      setFilter({
        pageType: pathname as RouteType,
        filter: {
          headline: headLine,
          pub_date: startDate ? moment(startDate).format('YYYYMMDD') : '',
          glocations: nations,
        },
      }),
    );
    onClose();
  };

  const toggleLocation = (nation: Nation) => {
    if (nations.includes(nation)) {
      setNations(nations.filter((n) => n === nation));
    } else {
      setNations([...nations, nation]);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <div>헤드라인</div>
        <Styled.Input
          placeholder="검색하실 헤드라인을 입력해주세요."
          value={headLine}
          onChange={(e) => setHeadLine(e.target.value)}
        />
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
            <Styled.NationButton
              key={n}
              value={n}
              $selected={nations.includes(n)}
              onClick={() => toggleLocation(n)}
            >
              {NATIONAL[n]}
            </Styled.NationButton>
          ))}
        </Styled.NationSelectBox>
      </Styled.InputBox>
      <Styled.ApplyButton onClick={onApply}>필터 적용하기</Styled.ApplyButton>
    </Styled.Wrapper>
  );
};

export default FilterForm;
