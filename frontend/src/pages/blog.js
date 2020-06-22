import { graphql } from 'gatsby';
import React from 'react';
import Layout from "../components/Layout"

// The GraphQL data is passed into the component via props.data
const fetchPage = props => {
  return (
    <Layout>

      {props.data.allRawgGame.edges.map(({ node }) => {
        return (
          <div key={node.id} style={{ marginTop: 60 }}>
            <p>{node.name}</p>
            <p>
              <img src={node.background_image} alt={node.name} />
            </p>
          </div>
        );
      })}
    </Layout>
  );
};

// We use the GraphiQL query here
export const query = graphql`
  query RawgQuery {
    allRawgGame {
      edges {
        node {
          id
          name
          background_image
        }
      }
    }
  }
`;

export default fetchPage;
