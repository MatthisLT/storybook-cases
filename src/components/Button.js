import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    control,
    children,
    as: Tagname,
    ...other
  } = props;

  return (
    <Tagname {...other}>
      {children}
    </Tagname>
  );
};

Button.propTypes = {
  as: PropTypes.elementType,
};

Button.defaultProps = {
  as: 'button',
};

export default Button;
