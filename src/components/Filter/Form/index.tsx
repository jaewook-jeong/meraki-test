import ReactDatePicker from 'react-datepicker';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import CustomInput from './CustomInput';
import { NATIONAL, NATION_LIST } from '@constants/NATIONAL';
import { RootState, useAppDispatch } from 'store';
import { setFilter } from 'features/filter/slice';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { RouteType } from 'types/routes';
import 'react-datepicker/dist/react-datepicker.css';
import { Nation } from 'types/nation';
import { useSelector } from 'react-redux';

const FilterForm = ({ onClose }: { onClose: () => void }) => {
  const { pathname } = useLocation();
  const everyFilter = useSelector((state: RootState) => state.filter);
  const { headline, pub_date, glocations } = everyFilter[pathname as RouteType];
  const dispatch = useAppDispatch();

  const [_pub_date, setPubDate] = useState<Date | null>(pub_date ? new Date(pub_date) : null);
  const [_headLine, setHeadLine] = useState(headline);
  const [_nations, setNations] = useState<Nation[]>(glocations);

  const onApply = () => {
    dispatch(
      setFilter({
        pageType: pathname as RouteType,
        filter: {
          headline: _headLine,
          pub_date: _pub_date,
          glocations: _nations,
        },
      }),
    );
    onClose();
  };

  const toggleLocation = (nation: Nation) => {
    if (_nations) {
      if (_nations.includes(nation)) {
        setNations(_nations.filter((n) => n === nation));
      } else {
        setNations([..._nations, nation]);
      }
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <div>헤드라인</div>
        <Styled.Input
          placeholder="검색하실 헤드라인을 입력해주세요."
          value={_headLine}
          onChange={(e) => setHeadLine(e.target.value)}
        />
      </Styled.InputBox>
      <Styled.InputBox>
        <div>날짜</div>
        <ReactDatePicker
          fixedHeight
          selected={_pub_date}
          onChange={(date) => setPubDate(date)}
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
              $selected={!!_nations?.includes(n)}
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
