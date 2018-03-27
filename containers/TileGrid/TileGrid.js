import React, {Component} from 'react';
import Tile from "../../components/Tile/Tile";

export default class TileGrid extends Component {

    render () {

        return  <div className={'tile-grid'}>
                    <Tile className={'pictures-tile'} title='Pictures'/>
                    <Tile className={'musics-tile'} title='Musics'/>
                    <Tile className={'documents-tile'} title='Documents'/>
                    <Tile className={'params-tile'} title='Params'/>
                </div>
    }
}
