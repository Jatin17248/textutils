import React, { Component } from 'react'
import Newsitem from "./Newsitem";

export default class News extends Component {   
    constructor()  {
        super();
        this.state = {
        articles: [],
        loading: false
    }
    
}
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f42e54b9f6c749809d3460ed330eab5b";
        let data = await fetch(url);
        let pdata = await data.json();
        
        this.setState({ articles: pdata.articles });

    }

    render() {    
    return (
            
    <div>
      <div className="container">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {  this.state.articles.map((element) => {
                return element.title !== null && element.urlToImage!==null ? <div className="col-md-3" key={element.url}>
                <Newsitem headline={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div> : " "
            })
        }
          
        </div>
      </div>
    </div>
      
    )
  }
}



