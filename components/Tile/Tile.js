import React, {Component} from 'react';

export default class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
    }

    onMouseOver(tileName) {

    }

    onMouseOut() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        const classes = 'tile' + ' ' + this.props.className;

        return  <div className={classes} onMouseOver={this.onMouseOver.bind(this, this.props.title)} onMouseOut={this.onMouseOut.bind(this)}>
                    <img src={'/img/Tiles/' + this.props.title + '.png'} />
                    <div className='tile-description'><div className="text">{this.props.title}</div></div>
                </div>
    }
}
