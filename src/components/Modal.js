import styled from "styled-components";

const Modal = (props) => {
  const { open, close } = props;
  return (
    <>
      {open ? (
        <>
          <CloseButton onClick={close}>&times;</CloseButton>
          {props.children}
        </>
      ) : null}
    </>
  );
};

const CloseButton = styled.button`
  //백그라운드를 누르면 닫히는 걸로 구현해보기
  display: flex;
  width: 10px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #696969;
  background-color: transparent;
  cursor: pointer;
  border: white;
`;

export default Modal;
