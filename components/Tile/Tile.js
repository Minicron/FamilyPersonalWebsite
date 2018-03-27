import React, {Component} from 'react';

export default class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayContent: false
        };
    }

    displaySlideShow(tileName) {

        console.log('test ' + tileName);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const classes = 'tile' + ' ' + this.props.className;

        return  <div className={classes} onMouseOver={this.displaySlideShow.bind(this, this.props.title)}>
                    <img src={'/img/Tiles/' + this.props.title + '.png'} />
                </div>
    }
}
