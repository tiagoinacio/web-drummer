import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classnames from 'classnames';
import style from './style.css';

export default class DrumSynth extends Component {

    render() {
        const drumSynthButtonCN = classnames(
            'pad',
            'pad--light',
        );

		return (
            <div className={ style['drum-synth'] }>
                <button className={ drumSynthButtonCN }></button>
            </div>
		);
	}
}

