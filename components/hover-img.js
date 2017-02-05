import React from 'react';
import path from 'path';
import './hover-img.less';

class HoverImg extends React.Component {
	constructor(props) {
		super(props);
		// after construction use setState to apply updates
		this.state = {
			hovered: false
		}
	}

	render() {
		return (
			<div className='hover-img'
				onMouseEnter={this.handleHover.bind(this, true)}
				onMouseLeave={this.handleHover.bind(this, false)} >
				<div>
					{/* load both images with separate tags */}
					<img src={this.props.main} style={{display: this.state.hovered? 'none': 'block'}}/>
					{this.props.hover
						?<img src={this.props.hover} style={{display: this.state.hovered? 'block': 'none'}} />
						: ''
					}
				</div>
				<div>{this.props.name}</div>
			</div>
			);
	}

	handleHover(hovered) {
		// only activate hover image if it exists and mouse over
		if (!this.props.hover) {
			hovered = false;
		}
		this.setState({
			hovered: hovered
		});
	}
}

export default HoverImg;
