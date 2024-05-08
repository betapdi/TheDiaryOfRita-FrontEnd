import PropTypes from 'prop-types';
import React from 'react';

import { FastField, Form, Formik } from 'formik'; //Remember to use 'Form' of formik instead of reactstrap
import { Star, StarBorder } from '@mui/icons-material';
import RatingField from '../../../../custom-fields/RatingField';

const StarRatingForm = (props) => {
  const {disabled, size, precision, readOnly, max, icon, emptyIcon} = props
  const {manga, onChange} = props

  const initialValues = {
    rating: null,
  }

  return (
    <div>
      <Formik 
        initialValues = {initialValues}
      >
        {formikProps => {
          return (
            <Form>
              <FastField
                name = {"manga_" + manga.id + "_rating"}
                component = {RatingField}

                onChange = {onChange}
                disabled = {disabled}
                size = {size}
                precision = {precision}
                readOnly = {readOnly}
                max = {max}
          
                icon = {icon}
                emptyIcon = {emptyIcon}
              />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

StarRatingForm.propTypes = {
  onChange: PropTypes.func,

  disabled: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.node,
  emptyIcon: PropTypes.node,
  precision: PropTypes.number,
  readOnly: PropTypes.bool,
  max: PropTypes.number,
}

StarRatingForm.defaultProps = {
  onChange: null,

  disabled: false,
  size: 'large',
  icon: <Star fontSize="inherit" />,
  emptyIcon: <StarBorder fontSize="inherit" />,
  precision: 1,
  readOnly: false,
  max: 5,
}

export default StarRatingForm