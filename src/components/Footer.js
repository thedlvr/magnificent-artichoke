import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Bespoke Health - Los Angeles | Aspen | San Francisco | 
         New York |  <a href=""></a>. Built with: <a href="">www.kottonmd.com</a>learn more</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
