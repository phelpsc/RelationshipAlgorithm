import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Embed extends React.Component {
  render() {
    const { title, episodeUrl } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <iframe title={title} style={{border:`none`, marginBottom:0}} scrolling="no" data-name="pb-iframe-player" src={episodeUrl} width="100%" height="122"></iframe>
      </div>
    )
  }
}

export default Embed
