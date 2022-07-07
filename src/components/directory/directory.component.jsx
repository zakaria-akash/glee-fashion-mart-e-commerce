import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "/images/home-image1.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "/images/home-image2.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "/images/home-image3.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "/images/home-image4.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "/images/home-image5.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
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