import PropTypes from 'prop-types'

const ClassNameWrapper = props => {
  const { className, mapperObj, renderProps } = props
  const getMapStyle = classNameStr => mapperObj[classNameStr]
  const getStyleBaseOnClassName = classNameStr => classNameStr.split(' ').map(getMapStyle)
  const style = getStyleBaseOnClassName(className)
  return renderProps(style)
}

ClassNameWrapper.propTypes = {
  className: PropTypes.string,
  mapperObj: PropTypes.object,
  renderProps: PropTypes.func.isRequired,
}

ClassNameWrapper.defaultProps = {
  className: 'none',
  mapperObj: { none: {} },
}

export default ClassNameWrapper
