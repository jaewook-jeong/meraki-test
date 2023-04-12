import Modal from '@/Modal';
import * as Styled from './styled';
import { useState } from 'react';
import FilterForm from './Form';

const Filter = () => {
  const [mount, setMount] = useState(false);
  const onClick = () => setMount(true);
  const onClose = () => setMount(false);
  return (
    <Styled.Wrapper>
      <Styled.FilterButton onClick={onClick}>전체 헤드라인</Styled.FilterButton>
      <Styled.FilterButton onClick={onClick}>전체 날짜</Styled.FilterButton>
      <Styled.FilterButton onClick={onClick}>전체 국가</Styled.FilterButton>
      <Modal visible={mount} onClose={onClose}>
        <FilterForm onClose={onClose} />
      </Modal>
    </Styled.Wrapper>
  );
};

export default Filter;
