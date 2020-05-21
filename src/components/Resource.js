import React, { Component } from 'react';
import { Redirect }  from 'react-router-dom';

class Resource extends Component {
    state = {
        clicked: false,
    };

    handleClick = () => {
        const { resource, onSelect } = this.props;
        onSelect(resource.id);
        this.setState({
            clicked: true,
        });
    };

    render() {
        const { resource } = this.props;

        return(
            <div className={'box'} onClick={ this.handleClick }>
                { this.state.clicked ? <Redirect to={`/viewCourse/${resource.id}`}/> : null }
                <div className={'flipBoxInner'}>
                    <div className={'flipBoxFront'}>
                        <h2>{ resource.title } </h2>
                    </div>
                    <div className={'flipBoxBack'}>
                        <p>{ resource.resourceAuthor }</p>
                        <p>Published on: { resource.datePublished }</p>
                        { resource.videoLength ? ( <p>{ resource.videoLength }</p> ) : null }
                        <p>Comments: { resource.comments.length }</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Resource;