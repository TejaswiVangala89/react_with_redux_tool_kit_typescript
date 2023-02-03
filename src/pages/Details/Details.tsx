import { Typography } from "@material-ui/core";
import React from "react";
import FeedImage from "../../asserts/feed1.png"
import { EditableAnnotation, SubjectCircle, ConnectorLine } from "react-annotation";

const Details: React.FC = () => {
  return (<div>
      <svg width={800} height={500}>
        <EditableAnnotation x={50} y={200} dx={230} dy={120} radius={50} >
          <ConnectorLine/>
        </EditableAnnotation>
      </svg>
    </div>)
};


export default Details;
