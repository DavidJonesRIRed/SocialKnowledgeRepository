import React, { Component }from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';
import Resource from './Resource';


class ResourceList extends Component {
  state = {
    query:"",
    searchedResources: [ ...this.props.resources.list ]
  };

  handleChange = (e) => {
    const query = e.target.value;
    const newList = this.props.resources.list.filter((resource) => {
      if(resource.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        return true;
      }
      if(resource.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });

    this.setState({
      query: query,
      searchedResources: newList,
    })
  };

  renderPosts = () => {
      const display = this.state.searchedResources.map((resource) => {
        return (
          <Resource 
          resource={resource} 
          key={resource.id}
          onSelect={ this.props.onSelect } 
          />
        );
      });
  
      return display;
  };

    
  render(){  
    return (
      <div>
        { /* TODO: Add Search Bar */ }
        <div style={myStyles.searchBar}>
          <input 
            style={myStyles.input} 
            type="text" 
            placeholder="&#x1F50D; Search Titles"
            onChange={this.handleChange}
          >
          </input>
        </div>
          <div className="resourceList">
            {this.renderPosts()}
          </div>
        </div>
    );
  }
}

const myStyles = { 
  searchBar: {
    flexDirection: "row",
    flex: 1,
    marginRight: "30%",
    marginLeft: "30%",
    marginBottom: "1.5rem",
  },
  input: {
    width: "60%",
    height: 32,
    fontSize: 20,
    marginBottom: 8,
  },
};

const mapStoreToProps = (store) => {
  return {
    count: store.resources.count,
    resources: store.resources,
  };
};

export default connect(mapStoreToProps, {
  increment,
})(ResourceList);