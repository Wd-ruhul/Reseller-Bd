import React from 'react';

const BlogCard = ({ data }) => {
  const {ques,ans} = data
  return (
    <div className="card  bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{ ques}</h2>
        <p>{ans }</p>
       
      </div>
    </div>
  );
};

export default BlogCard;