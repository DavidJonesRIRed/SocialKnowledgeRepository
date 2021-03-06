import React, {Component} from 'react';
import Button from './common/Button';

class ResourceForm extends Component{
    state ={
        id: 0,
        posterName: "",
        resourceAuthor: "",
        authorSkillLevel: "",
        cohort: "",
        title: "",
        categories: "",
        summary: "",
        link: "",
        resourceType: "",
        datePublished: "",
        videoLength: "",
        timeToComplete: "",
        rating: "",
        comments: [],
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit= (e) => {
        e.preventDefault();
        // any data manipulation and validation
        const newResource = { ...this.state };
        newResource.categories = newResource.categories.split(',');

        this.props.addResource(newResource);
        this.setState({
            posterName: "",
            resourceAuthor: "",
            authorSkillLevel: "",
            cohort: "",
            title: "",
            categories: "",
            summary: "",
            link: "",
            resourceType: "",
            datePublished: "",
            videoLength: "",
            timeToComplete: "",
            rating: "",
            comments: [],
        });
    };

    render(){
        return(
            <div className>
                <form style={ styles.form } onSubmit={ this.handleSubmit }>
                    {/* <label htmlFor="posterName">Your Name: </label> */ }
                    <input 
                        style={ styles.input } 
                        id="posterName" type="text" 
                        placeholder="Your Name"
                        value={ this.state.posterName } 
                        onChange={ this.handleChange } />
                    <br />
                    <input 
                        style={ styles.input } 
                        id="resourceAuthor" type="text" 
                        placeholder="Resource Author"
                        value={ this.state.resourceAuthor}
                        onChange={ this.handleChange } />
                    { /* dropmenu for author level */}
                    <div>
                        <select 
                        id="authorSkillLevel"
                        value={ this.state.authorSkillLevel }
                        onChange={ this.handleChange }
                        >
                        <option value="" disabled>
                            Author skill level
                        </option>
                        <option value="Intro">Intro</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <input 
                        style={ styles.input } 
                        id="cohort" type="text" 
                        placeholder="Cohort #"
                        value={ this.state.cohort }
                        onChange={ this.handleChange } />
                    <input 
                        style={ styles.input } 
                        id="title" type="text" 
                        placeholder="Resource Title"
                        value={ this.state.title } 
                        onChange={ this.handleChange } />
                        <input
                        style={styles.input}
                        type="text"
                        id="categories"
                        placeholder="Categories (seperate multiples with commas)"
                        value={this.state.categories}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="link"
                        placeholder="Resource Link"
                        value={this.state.link}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="resourceType"
                        placeholder="Resource Type"
                        value={this.state.resourceType}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="date"
                        id="datePublished"
                        placeholder="Published Date"
                        value={this.state.datePublished}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="videoLength"
                        placeholder="Length of Video (optional)"
                        value={this.state.videoLength}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="timeToComplete"
                        placeholder="Time to complete resource"
                        value={this.state.timeToComplete}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="number"
                        id="rating"
                        placeholder="1 to 5 rating"
                        value={this.state.rating}
                        onChange={(e) => this.handleChange(e)}
                      />
                    <Button text="Submit" type="submit" />
                </form>
            </div>
        );
    }
};


const styles = {
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "20%",
        marginLeft: "20%",
        flexDirection: "column",
    },
    input: {
        width: "60%",
        height: 32,
        fontSize: 20,
        marginBottom: 8,
    },
};

export default ResourceForm;