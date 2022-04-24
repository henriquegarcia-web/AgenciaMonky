import styled from "styled-components";
import colors from "../../Utils/colors";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 30px;
`

export const ContactHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const ContactTitle = styled.h2`
  width: calc(100% - 155px);
  font-size: 20px;
  font-weight: 500;
`

export const ContactButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 50px;
  width: 135px;
  height: fit-content;
  margin-left: 20px;

  background-color: ${colors.yellow};
  border: 2px solid ${colors.yellow};
  box-shadow: 1px 1px 2px 1px rgba(999,999,999, 0.1);
  transition: all 0.2s ease-out;

  :hover {
    color: ${colors.yellow};
    background: transparent;
    border: 2px solid ${colors.yellow};
  }
`

export const Span = styled.span`
  width: 100%;
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
`

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FormGroup = styled.div`
  width: 49%;

  &.textarea {
    width: 100%;
  }
  
  & + & {
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
    margin-left: 15px;
  }
`

export const ContactFormButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: fit-content;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 50px;
  margin-left: auto;

  border: 2px solid transparent;
  box-shadow: 1px 1px 2px 1px rgba(999,999,999, 0.1);
  transition: all 0.2s ease-out;

  :hover {
    color: ${colors.white};
    background: transparent;
    border: 2px solid ${colors.white};
  }
`