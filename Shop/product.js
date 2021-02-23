import React from 'react'
import PropTypes from 'prop-types'

const product = ({ price, quantity, title}) => (
    <div>
        {title} - &#36;{price},{quantity? `x ${quantity}`:null}
    </div>
)

Product.propTypes = {
    price: propTypes.number,
    quantity: propTypes.number,
    title: propTypes.string
}

export default product