import React from "react";

const legendComponent = {
  backgroundColor: "#fff",
  borderRadius: "3px",
  bottom: "30px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  position: "absolute",
  right: "10px",
  zIndex: 1,
};
const legendHeader = {
  margin: "0 0 10px",
};

const legendSpan = {
  borderRadius: "50%",
  display: "inline-block",
  height: "10px",
  marginRight: "5px",
  width: "10px",
};

export default function legend() {
  return (
    <>
      <div style={legendComponent}>
        <h4 style={legendHeader}>Legend</h4>
        <div>
          <span
            style={Object.assign({}, legendSpan, {
              backgroundColor: "#00ff00",
            })}
          ></span>
          4 or higher
        </div>
        <div>
          <span
            style={Object.assign({}, legendSpan, {
              backgroundColor: "#e8eb34",
            })}
          ></span>
          4 or higher
        </div>
        <div>
          <span
            style={Object.assign({}, legendSpan, {
              backgroundColor: "#eb9c34",
            })}
          ></span>
          4 or higher
        </div>
        <div>
          <span
            style={Object.assign({}, legendSpan, {
              backgroundColor: "#eb3434",
            })}
          ></span>
          4 or higher
        </div>
        <div>
          <span
            style={Object.assign({}, legendSpan, {
              backgroundColor: "#eb3434",
            })}
          ></span>
          4 or higher
        </div>
      </div>
    </>
  );
}
