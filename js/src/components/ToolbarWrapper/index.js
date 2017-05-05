import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Affix } from 'antd';

export default class ToolbarWrapper extends Component {

  static propTypes = {
    toolbarFixed: PropTypes.bool,
  }

	render() {
		const {
			toolbarFixed,
			children,
		} = this.props;

		if(toolbarFixed) {
			return (
				<Affix>
					{children}
				</Affix>
			);
		}

		return (
			<div>
				{children}
			</div>
		);
	}
}
