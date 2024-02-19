import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledButtonWrapper,
  StyledFilterForm,
  StyledFormWrapper,
  StyledInput,
  StyledSelect
} from '../../../styles/blocks/filterForm';

import {
  StyledResetButton,
  StyledSubmitButton
} from '../../../styles/base/button';

export const FilterForm = ({ setShowFilters }) => {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: ''
    });
    setShowFilters(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(filters).some(value => value.trim() !== '')) return;

    const data = {};
    const formData = new FormData(e.target);

    for (const [key, value] of formData) {
      data[key] = value;
    }

    console.log('formData: ', data);
    handleResetFilters();
  };

  return (
    <>
      <StyledFilterForm onSubmit={handleSubmit}>
        <StyledFormWrapper>
          <StyledInput
            type='text'
            name='name'
            value={filters.name}
            onChange={handleChange}
            placeholder='Name'
          />

          <StyledInput
            type='text'
            name='type'
            value={filters.type}
            onChange={handleChange}
            placeholder='Type'
          />

          <StyledSelect
            name='status'
            value={filters.status}
            onChange={handleChange}
          >
            <option value=''>Status</option>
            <option value='alive'>Alive</option>
            <option value='dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </StyledSelect>

          <StyledSelect
            name='species'
            value={filters.species}
            onChange={handleChange}
          >
            <option value=''>Species</option>
            <option value='human'>Human</option>
            <option value='alien'>Alien</option>
            <option value='humanoid'>Humanoid</option>
          </StyledSelect>

          <StyledSelect
            name='gender'
            value={filters.gender}
            onChange={handleChange}
          >
            <option value=''>Gender</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
          </StyledSelect>
        </StyledFormWrapper>

        <StyledButtonWrapper gap={'20px'}>
          <StyledResetButton type='reset' onClick={handleResetFilters}>
            Reset
          </StyledResetButton>

          <StyledSubmitButton type='submit'>
            Apply
          </StyledSubmitButton>
        </StyledButtonWrapper>
      </StyledFilterForm>
    </>
  );
};

FilterForm.propTypes = {
  setShowFilters: PropTypes.func,
};
