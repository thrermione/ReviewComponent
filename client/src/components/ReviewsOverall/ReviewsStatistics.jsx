import React from 'react';
import RatingBox from './RatingBox';
import styled from 'styled-components';

import OverallExperience from './OverallExperience';
import Ratings from '../../shared/Ratings';
import helpers from '../../helpers';
import { MARKERS } from '../../constants';

const ReviewsStatistics = (props) => {
  const {
    reviews
  } = props;
  const { data } = helpers.aggregateData(reviews);
  return (
    <OverallStatistics>
      <span className="reviews-statistics__title">
        Overall Rating:
      </span>
      <Ratings rating={data.overallRating} markers={MARKERS.LEGOS}/>
      <span className="reviews-statistics__recommendation">
        {data.overallRecommendation}
        % would recommend this product.
      </span>
      <div className="reviews-statistics__overall-breakdown">
        <div className="reviews-statistics__rating-breakdown">
          <h3 className="reviews-statistics__title">
            Rating
          </h3>
          {
            Object.values(data.aggregatedReviewsData).reverse().map((data, idx) => (
              <RatingBox key={idx} star={5 - idx} data={data}/>
            ))
          }
        </div>
        <OverallExperience experiences={data.aggregatedExperiences}/>
      </div>
    </OverallStatistics>
  );
};

export default ReviewsStatistics;


const OverallStatistics = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.25rem 0px 1rem;
`;