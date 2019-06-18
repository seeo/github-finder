import React, {Component} from 'react';

class Navbar extends Component{
    //allow site to display the default props, if no props are specified at the parent
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github',
    };

    //type checking...

    render(){
        return(
            <div className = "navbar bg-primary">
                <h1>
                    <i className = {this.props.icon} />{this.props.title}
                </h1>
            </div>
        )
    }
}

export default Navbar;