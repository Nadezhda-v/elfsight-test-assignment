import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isEqual } from 'lodash';

import {
  StyledButtonWrapper,
  StyledFilterForm,
  StyledFormWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledSelect,
  StyledSelectWrapper,
} from '../../../styles/blocks/filterForm';

import {
  StyledResetButton,
  StyledSubmitButton
} from '../../../styles/base/button';
import { filterRequestAsync } from '../../../store/cards/cardsAction';

export const FilterForm = ({ setShowFilters }) => {
  const dispatch = useDispatch();
  const [previousData, setPreviousData] = useState(null);
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
    // setShowFilters(false);
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!Object.values(filters).some(value => value.trim() !== '')) return;

    const data = {};
    const formData = new FormData(e.target);

    for (const [key, value] of formData) {
      data[key] = value;
    }

    // Сравнение текущих данных с предыдущими данными
    if (isEqual(data, previousData)) {
      return;
    }

    dispatch(filterRequestAsync(data));
    setPreviousData(data);
  }, [filters, previousData]);

  return (
    <>
      <StyledFilterForm onSubmit={handleSubmit}>
        <StyledFormWrapper>
          <StyledInputWrapper>
            <StyledInput
              type='text'
              name='name'
              onChange={handleChange}
              placeholder='Name'
              maxLength={40}
            />

            <StyledInput
              type='text'
              name='type'
              onChange={handleChange}
              placeholder='Type'
              maxLength={40}
            />
          </StyledInputWrapper>

          <StyledSelectWrapper>
            <StyledSelect
              name='status'
              onChange={handleChange}
            >
              <option value=''>Status</option>
              <option value='alive'>Alive</option>
              <option value='dead'>Dead</option>
              <option value='unknown'>Unknown</option>
            </StyledSelect>

            <StyledSelect
              name='species'
              onChange={handleChange}
            >
              <option value=''>Species</option>
              <option value='human'>Human</option>
              <option value='alien'>Alien</option>
              <option value='humanoid'>Humanoid</option>
            </StyledSelect>

            <StyledSelect
              name='gender'
              onChange={handleChange}
            >
              <option value=''>Gender</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='genderless'>Genderless</option>
              <option value='unknown'>Unknown</option>
            </StyledSelect>
          </StyledSelectWrapper>
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
