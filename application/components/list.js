import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { UncontrolledAlert } from 'reactstrap';

import { fetchServices } from '../actions';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleMoreServices = this.handleMoreServices.bind(this);
  }

  handleMoreServices(service) {
    service.preventDefault();
    this.props.fetchServices(this.props.nextToken);
  }

  render() {
    const { handleMoreServices } = this;
    const { services, nextToken, error } = this.props;

    return (
      <div className="container">
        <header className="pb-2 mt-4 mb-2">
          <h1>
            List of Services
          </h1>
        </header>
        <section>
          {error && error.errors.map(error => {
            return (
              <UncontrolledAlert color="danger" key={error.message}>
                {error.message}
              </UncontrolledAlert>
            );
          })}
        </section>
        <main>
          <div className="card-columns">
            {services.map(service => {
              const { id, name, language, description } = service;

              return (
                <div key={id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{language}</h6>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center mb-2">
            {nextToken && <button className="btn btn-link" onClick={handleMoreServices}>More</button>}
          </div>
        </main>
      </div>
    );
  }
}

List.propTypes = {
  services: PropTypes.array.isRequired,
  fetchServices: PropTypes.func.isRequired,
  nextToken: PropTypes.string,
  error: PropTypes.object
};

function mapStateToProps(state) {
  const services = state.services && state.services.items || [];
  const nextToken = state.services && state.services.nextToken;
  const error = state.error;

  return {
    services,
    nextToken,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchServices: (nextToken) => dispatch(fetchServices(nextToken))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
