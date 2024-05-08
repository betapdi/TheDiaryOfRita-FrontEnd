import React from 'react'
import PropTypes from 'prop-types'
import { Star, StarBorder } from '@mui/icons-material'
import { Rating } from '@mui/material'

const RatingField = (props) => {
  const { field, form, 
    disabled, size, precision, readOnly, max, icon, emptyIcon, onChange} = props
  const { name, value, onBlur } = field

  const {errors, touched} = form
  const showError = errors[name] && touched[name]

  const handleSelectedRatingChange = (event, newRating) => {
    form.setFieldValue(field.name, newRating)
    onChange(newRating)
  }

  const getValue = () => {
    return (field.value ? field.value : 0)
  }

  return (
    <Rating 
    id = {name}
    {...field}
    onChange = {handleSelectedRatingChange}
    value = {getValue()}

    name = {name} 
    disabled = {disabled}
    size = {size}
    precision = {precision}
    readOnly = {readOnly}
    max = {max}

    icon = {icon}
    emptyIcon = {emptyIcon}
    />
  )
}

RatingField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  value: PropTypes.number,

  disabled: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.node,
  emptyIcon: PropTypes.node,
  precision: PropTypes.number,
  readOnly: PropTypes.bool,
  max: PropTypes.number,
}

RatingField.defaultProps = {
  value: 0,
  disabled: false,
  size: 'large',
  icon: <Star fontSize="inherit" />,
  emptyIcon: <StarBorder fontSize="inherit" />,
  precision: 1,
  readOnly: false,
  max: 5,
}

export default RatingField