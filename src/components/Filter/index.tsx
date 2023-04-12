import Modal from '@/Modal';
import * as Styled from './styled';
import { useState } from 'react';
import FilterForm from './Form';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useLocation } from 'react-router-dom';
import { RouteType } from 'types/routes';
import Icons from '@assets/svg';
import moment from 'moment';
import { NATIONAL } from '@constants/NATIONAL';

const Filter = () => {
  const { pathname } = useLocation();
  const [mount, setMount] = useState(false);
  const onClick = () => setMount(true);
  const onClose = () => setMount(false);

  const everyFilter = useSelector((state: RootState) => state.filter);
  const { headline, pub_date, glocations } = everyFilter[pathname as RouteType];

  return (
    <Styled.Wrapper>
      <Styled.FilterButton onClick={onClick} $active={!!headline}>
        <Icons.Search />
        {headline || '전체 헤드라인'}
      </Styled.FilterButton>
      <Styled.FilterButton onClick={onClick} $active={!!pub_date}>
        <Icons.Calendar />
        {pub_date ? moment(pub_date).format('YYYY.MM.DD') : '전체 날짜'}
      </Styled.FilterButton>
      <Styled.FilterButton onClick={onClick} $active={!!glocations?.length}>
        {glocations && glocations?.length > 0
          ? `${NATIONAL[glocations[0]]} ${
              glocations.length > 1 ? `외 ${glocations.length - 1}개` : ''
            }`
          : '전체 국가'}
      </Styled.FilterButton>
      <Modal visible={mount} onClose={onClose}>
        <FilterForm onClose={onClose} />
      </Modal>
    </Styled.Wrapper>
  );
};

export default Filter;
