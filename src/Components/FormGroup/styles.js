import styled from 'styled-components';
import colors from '../../Utils/colors';

export const Container = styled.div`
  width: 48%;
  margin-bottom: 15px;

  &.textarea {
    width: 100%;
  }

  small {
    color: ${colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }
`;
