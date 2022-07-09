import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import SectionData from "./sections.data.js";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SectionData
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
          ))}
      </div>
    );
  }
}

export default Directory;


//image1: https://i.ibb.co/cvpntL1/hats.png
//image2: https://i.ibb.co/px2tCc3/jackets.png
//image3: https://i.ibb.co/0jqHpnp/sneakers.png
//image4: https://i.ibb.co/GCCdy8t/womens.png
//image5: https://i.ibb.co/R70vBrQ/men.png