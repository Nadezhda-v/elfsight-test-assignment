import React, { useState } from 'react';

import { StyledFilterButton } from '../../styles/base/button';
import { StyledButtonWrapper } from '../../styles/blocks/filterForm';
import { FilterForm } from './FilterForm/FilterForm';

export const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <StyledButtonWrapper>
        <StyledFilterButton onClick={() => setShowFilters(!showFilters)}>
          Filter
        </StyledFilterButton>
      </StyledButtonWrapper>

      {showFilters && <FilterForm />}
    </>
  );
};
