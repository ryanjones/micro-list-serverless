import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import List from './list';
import { fetchServices } from '../actions';

const styles = {
  main: {
    padding: '60px 15px 0'
  }
};

class Layout extends React.Component {
  componentDidMount() {
    this.props.fetchServices();
  }

  render() {
    return (
      <div>
        <main style={styles.main}>
          <Route exact path="/" component={List} />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  fetchServices: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    fetchServices: () => dispatch(fetchServices())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
