import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Bespoke Health - Los Angeles | Aspen | San Francisco | 
         New York | Global  <a href=""></a> Boston - <a  href="https://www.kottonmd.com/">Learn More</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
