import React from 'react';
import PropTypes from 'prop-types';

import { Container, Greeter } from 'components';

const Settings = (props) => {
  const { customData } = props.navigation.state.params;
  return (
    <Container center>
      <Greeter greetText={customData} />
    </Container>
  );
};

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.defaultProps = {
  navigation: null,
};

export default Settings;
