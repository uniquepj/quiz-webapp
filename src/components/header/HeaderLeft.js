import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";

class HeaderLeft extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <div>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div style={{ textAlign: "right" }}>
                <ZoomInIcon
                  color="primary"
                  style={{ fontSize: 40, cursor: "pointer" }}
                  onClick={zoomIn}
                />
                <ZoomOutIcon
                  color="primary"
                  style={{ fontSize: 40, cursor: "pointer" }}
                  onClick={zoomOut}
                />
                <ZoomOutMapIcon
                  color="primary"
                  style={{ fontSize: 40, cursor: "pointer" }}
                  onClick={resetTransform}
                />
              </div>
              <TransformComponent>
                <img
                  src={imgSrc}
                  alt="Wait for a while"
                  width="100%"
                  height="100%"
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    );
  }
}

export default HeaderLeft;
