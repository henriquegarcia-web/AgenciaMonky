import styled from "styled-components";
import colors from "../../Utils/colors";

export const Plans = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const PlansWrapper = styled.div`
  display: flex;
`

export const PlansCard = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-right: 40px;

  background-color: ${colors.lightGray};

  &:last-of-type {
    margin: 0;
  }
`