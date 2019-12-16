import React from 'react';

const apiKey =
  'c6U7NF1bhTgI3V3KcgZaK-YI1sqcIRKRFV1_wwf8WMXMZ-1tNdAFXzi0q6idHSkiFr5Z5KHDlkVuhicswCjDhtoTLSPfl_lk6Egs2TMiV8eieAAecKJsFri3mK32XXYx';

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
