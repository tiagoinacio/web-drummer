import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classnames from 'classnames';
import style from './style';

export default class ControlBar extends Component {

    render() {
        const buttonCN = classnames(
            'button-primary--light',
            style['control-button'],
        );

		return (
            <div className={ style['control-bar'] }>
                <button className={ buttonCN }>Play</button>
                <button className={ buttonCN }>Pause</button>
            </div>
		);
	}
}
