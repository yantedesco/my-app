import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: #474a51;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  margin-right: 12px;
  padding: 5px 40px;
  border: 1px solid #39ff14;
  color: #f1f1f1;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const CardItem = styled.div`
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h5`
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tag = styled.h6`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
