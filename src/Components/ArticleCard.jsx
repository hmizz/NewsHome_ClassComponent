import React, { Component } from "react";

export class ArticleCard extends Component {
  render() {
    const { id, image, title, subtitle } = this.props.data;

    return (
      <div className="single-card">
        <img src={image} alt={title} />
        <div>
          <h3>{id}</h3>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
