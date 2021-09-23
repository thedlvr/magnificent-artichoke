import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Bespoke Health - Los Angeles | Aspen | San Francisco | 
         New York |  <a href=""></a>  <a  href="https://www.kottonmd.com/">More</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
