import React from 'react';
import path from 'path';
// import './hover-img.less';

class HoverImg extends React.Component {
	constructor(props) {
		super(props);
		// after construction use setState to apply updates
		this.state = {
			hovered: false,
			img_url: this.props.main
		}
	}

	render() {
		return (
			<div className='hover-img'
				onMouseEnter={this.handleHover.bind(this, true)}
				onMouseLeave={this.handleHover.bind(this, false)} >
				<div>
					<img src={this.state.img_url} />
				</div>
				<div>{this.props.name}</div>
			</div>
			);
	}

	handleHover(hovered) {
		var img_url = this.props.main;
		if (this.props.hover && hovered) {
			img_url = this.props.hover;
		}
		this.setState({
			hovered: hovered,
			img_url: img_url
		});
	}
}

export default HoverImg;
