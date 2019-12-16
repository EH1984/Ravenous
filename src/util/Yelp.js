import React from 'react';

const apiKey = 'ADD KEY HERE';

class Yelp extends React.Component {
  static search = (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => response.json())
      .then(response => {
        if (response.businesses) {
          return response.businesses.map(data => {
            const {
              id,
              image_url,
              name,
              location,
              category,
              rating,
              review_count
            } = data;
            return {
              id,
              image_url,
              name,
              location,
              category,
              rating,
              review_count
            };
          });
        }
      });
  };
}

export default Yelp;
