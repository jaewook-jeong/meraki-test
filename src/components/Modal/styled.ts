import styled from "@emotion/styled"


export const ModalWrapper = styled.div<{ $visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

export const ModalOverlay = styled.div<{ $visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 335px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`