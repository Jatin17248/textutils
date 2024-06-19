import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        console.log(this.props);
    let {headline, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        
      <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt={headline}/>
  <div className="card-body">
    <h5 className="card-title">{headline}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
