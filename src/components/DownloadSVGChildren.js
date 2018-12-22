import React, { useState, useRef, useEffect } from 'react'

const DownloadSVGChildren = ({ children, filename, ...otherProps }) => {
  const [href, setHref] = useState(null)
  const link = useRef(null)

  useEffect(() => {
    setHref(`data:image/svg+xml;utf8,${link.current.innerHTML}`)
  }, [children])

  return (
    <a ref={link} href={href} download={filename} {...otherProps}>
      {children}
    </a>
  )
}

export default DownloadSVGChildren
