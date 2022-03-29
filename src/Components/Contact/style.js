import styled, { css } from "styled-components";
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
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
`

export const ContactHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContactTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
`

export const ContactButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-radius: 50px;
  padding: 8px 18px;
  border: 2px solid transparent;
  box-shadow: 1px 1px 2px 1px rgba(999,999,999, 0.1);
  transition: all 0.2s ease-out;

  :hover {
    color: ${colors.white};
    background: transparent;
    border: 2px solid ${colors.white};
  }
`

export const Span = styled.span`
  width: 100%;
  margin: 30px 0;
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

export const ContactFormButton = styled.button`
  float: right;
  width: 250px;
  padding: 15px;
  border-radius: 25px;
  margin-left: auto;
  cursor: pointer;
  border: 2px solid transparent;
  box-shadow: 1px 1px 2px 1px rgba(999,999,999, 0.1);
  transition: all 0.2s ease-out;

  :hover {
    color: ${colors.white};
    background: transparent;
    border: 2px solid ${colors.white};
  }

  &[disabled] {
    color: #939393;
    background: #ccc;
    cursor: default;
  }
`