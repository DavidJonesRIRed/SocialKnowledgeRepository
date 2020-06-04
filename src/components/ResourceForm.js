import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";
import Button from './common/Button';

class ResourceForm extends Component{
    state ={
       /* id: 0,
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
        comments: [], */
    };

    handleClick = () => {
      this.props.increment(this.props.count);
    };
    
    handleChange = (e) => {
        this.props.changeForm(e.target.id, e.target.value);
    };

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.submitForm(this.props.formResourceReducer.form);
    };

    render(){
        const { form } = this.props.formResourceReducer;

        return(
            <div className>
                <form style={ styles.form } onSubmit={ this.handleSubmit }>
                    {/* <label htmlFor="posterName">Your Name: </label> */ }
                    <input 
                        style={ styles.input } 
                        id="posterName" type="text" 
                        placeholder="Your Name"
                        value={  form.posterName } 
                        onChange={ this.handleChange } />
                    <br />
                    <input 
                        style={ styles.input } 
                        id="resourceAuthor" type="text" 
                        placeholder="Resource Author"
                        value={  form.resourceAuthor}
                        onChange={ this.handleChange } />
                    { /* dropmenu for author level */}
                    <div>
                        <select 
                        id="authorSkillLevel"
                        value={  form.authorSkillLevel }
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
                        value={  form.cohort }
                        onChange={ this.handleChange } />
                    <input 
                        style={ styles.input } 
                        id="title" type="text" 
                        placeholder="Resource Title"
                        value={  form.title } 
                        onChange={ this.handleChange } />
                        <input
                        style={styles.input}
                        type="text"
                        id="categories"
                        placeholder="Categories (seperate multiples with commas)"
                        value={ form.categories}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="link"
                        placeholder="Resource Link"
                        value={ form.link}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="resourceType"
                        placeholder="Resource Type"
                        value={ form.resourceType}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="date"
                        id="datePublished"
                        placeholder="Published Date"
                        value={ form.datePublished}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="videoLength"
                        placeholder="Length of Video (optional)"
                        value={ form.videoLength}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="text"
                        id="timeToComplete"
                        placeholder="Time to complete resource"
                        value={ form.timeToComplete}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <input
                        style={styles.input}
                        type="number"
                        id="rating"
                        placeholder="1 to 5 rating"
                        value={ form.rating}
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

const mapStoreToProps = (store) => {
    return {
      formResourceReducer: store.formResourceReducer,
    };
  };
  
  const mapActionsToProps = () => {
    return {
      changeForm,
      submitForm,
    };
  };

  export default connect(mapStoreToProps, mapActionsToProps())(ResourceForm);