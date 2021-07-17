import React from 'react';

const CatList = (props) => {
  const renderCats = () => {
    return props.catPics.map((cat) => {
      return <img src={cat.url} />;
    });
  };
  return <div>{renderCats()}</div>;
};

export default CatList;
