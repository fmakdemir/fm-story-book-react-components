import React from 'react';
import palette from '../static/data/palette.json';
import Dropdown from 'react-dropdown';
import './color-palette.less';

class ColorPalette extends React.Component {
	constructor(props) {
		super(props);
		var color_list = Object.keys(palette);
		var color = color_list[0];
		var hideDropdown = false;
		var width = '200px';
		if (props.color && color_list.indexOf(props.color) > -1) {
			color = props.color;
		}
		if (props.width) {
			width = props.width;
		}
		if (props.hideDropdown) {
			hideDropdown = true;
		}
		this.state = {
			color_list: color_list,
			color: color,
			width: width,
			hideDropdown: hideDropdown
		};
	    this._onSelect = this._onSelect.bind(this);
	}
	render() {
		return (
		<div style={{width: this.state.width}}>
			{this.state.hideDropdown
			?<div className="Dropdown-control">{this.state.color}</div>
			:<Dropdown options={this.state.color_list} onChange={this._onSelect} value={this.state.color} placeholder="Select a Color" />
			}
			<div>
			{this.renderColors()}
			</div>
		</div>);
	}
	_onSelect(option) {
		this.setState({color: option.value});
	}
	renderColors() {
		var col = palette[this.state.color].colors;
		return Object.keys(col).map((cv) => {
			return (
			<div key={cv} style={{position: 'relative', backgroundColor: col[cv].hex, height: '2em', textAlign: 'center'}}>
				<span style={{position: 'absolute', left: 0}}>{cv}</span>
				<span style={{position: 'absolute', right: 0}}>{col[cv].hex}</span>
			</div>);
		});
	}
}

export default ColorPalette;
