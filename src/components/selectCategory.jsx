/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'
import { ReactComponent as DownIcon } from '../assets/down.svg'
import categories from '../data/categories'

const SelectContainer = styled.div`
    background: ${theme.lightGrey};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.lightGrey2};
    }
`

const SelectedOption = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`

const Options = styled.div`
    background: ${theme.lightGrey};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`

const Option = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.lightGrey2};
    }
`

const SelecteCategorys = ({ state }) => {
  const { expense, setExpense } = state
  const { category } = expense
  const [showOptions, setShowOptions] = useState(false)

  SelecteCategorys.propTypes = {
    state: PropTypes.object.isRequired,
  }

  const handleClick = (e) => {
    setExpense({
      ...expense,
      category: e.currentTarget.dataset.value,
    })
  }

  return (
    <SelectContainer onClick={() => setShowOptions(!showOptions)}>
      <SelectedOption>
        {category}
        <DownIcon />
        {
          showOptions
          && (
          <Options>
            {
              categories.map((cate) => (
                <Option
                  key={cate.id}
                  data-value={cate.id}
                  onClick={handleClick}
                >
                  {cate.text}

                </Option>
              ))
            }
          </Options>
          )
        }
      </SelectedOption>
    </SelectContainer>
  )
}

export default SelecteCategorys
