import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="117" cy="123" r="116" />
    <rect x="186" y="255" rx="0" ry="0" width="18" height="0" />
    <rect x="0" y="262" rx="10" ry="10" width="236" height="21" />
    <rect x="0" y="295" rx="10" ry="10" width="235" height="50" />
    <rect x="1" y="360" rx="10" ry="10" width="107" height="34" />
    <rect x="124" y="360" rx="10" ry="10" width="107" height="34" />
    <rect x="199" y="381" rx="0" ry="0" width="3" height="0" />
  </ContentLoader>
);

export default PizzaSkeleton;
