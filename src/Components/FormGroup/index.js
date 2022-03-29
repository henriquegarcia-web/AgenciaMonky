import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error, className }) {
  return (
    <Container className={className}>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
