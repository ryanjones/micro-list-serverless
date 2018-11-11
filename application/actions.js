import { API, graphqlOperation } from 'aws-amplify';

// Action Types

export const FETCH_SERVICES_COMPLETE              = 'FETCH_SERVICES_COMPLETE';
export const FETCH_MORE_SERVICES_COMPLETE         = 'FETCH_MORE_SERVICES_COMPLETE';

// GraphQL Queries

const FetchServices = `query EventConnection($nextToken: String) {
    listServices(nextToken: $nextToken) {
      services {
        id
        name
        language
        description
      }
      nextToken
    }
  }`;


// Exported Actions

export function fetchServices(nextToken) {
    return dispatch => {
      API.graphql(graphqlOperation(FetchServices, { nextToken }))
        .then(response => {
          const data = response.data;
  
          dispatch({
            type: nextToken ? FETCH_MORE_SERVICES_COMPLETE : FETCH_SERVICES_COMPLETE,
            services: data.listServices.services,
            nextToken: data.listServices.nextToken
          });
        });
    };
  }