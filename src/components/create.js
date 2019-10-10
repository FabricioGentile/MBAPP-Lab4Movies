import React from 'react';

class Create extends React.Component{

  constructor(props) {
    super(props);
    this.state = {Title: '', ReleaseYear: '', PosterURL: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleReleaseYearChange = this.handleReleaseYearChange.bind(this);
    this.handlePosterURLChange = this.handlePosterURLChange.bind(this);
  }

  handleMovieTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleReleaseYearChange(e){
    this.setState({ReleaseYear: e.target.value});
  }
  
  handlePosterURLChange(e){
    this.setState({PosterURL: e.target.value});
  }

  handleSubmit(e){
    alert("Title: " + this.state.Title + ", Year: " + this.state.ReleaseYear + ", PosterURL: " + this.state.PosterURL);
    e.preventDefault();
    this.setState({Title: '', Year: ''});
  }

  render(){
    return(
      <div>
        <h3>Hello from Create</h3>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label> Movie Title: </label>
          <input type="text" className="form-control" value={this.state.Title} onChange={this.handleMovieTitleChange} />   
        </div>
        <div>
          <label> Release Year: </label>
          <input type="text" className="form-control" value={this.state.ReleaseYear} onChange={this.handleReleaseYearChange} />   
        </div>
        <div>
          <label> Poster URL: </label>
          <input type="text" className="form-control" value={this.state.PosterURL} onChange={this.handlePosterURLChange} />   
        </div>
        <div>
          <input type="submit" value="Add Movie"/>
        </div>
      </form>
    </div>
    );
  } 
}

export default Create;

