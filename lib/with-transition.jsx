import React from 'react';
import { Transition } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import 'semantic-ui-css/components/transition.min.css';

const OPEN_TIME = 500;
const CLOSE_TIME = 1000;

export default function withTransitions(Component) {
    class SemanticTransition extends React.Component {
        static propTypes = {
            toastId: PropTypes.number.isRequired,
            onClose: PropTypes.func.isRequired,
            animation: PropTypes.string.isRequired,
            time: PropTypes.number
        };

        static defaultProps = {
            time: 2000
        };

        state = {
            visible: false,
            time: OPEN_TIME,
            animation: 'pulse'
        };

        componentDidMount() {
            // schedule auto closing of toast
            if (this.props.time) {
                this.timerId = setTimeout(this.onClose, this.props.time);
            }

            // start animation as soon as toast is mounted in the dom
            this.setState({ visible: true });
        }

        onClose = () => {
            // trigger new animation when toast is dismissed
            this.setState(
                prevState => ({
                    visible: !prevState.visible,
                    animation: this.props.animation,
                    time: CLOSE_TIME
                }),
                () => {
                    setTimeout(() => {
                        if (this.timerId) {
                            clearTimeout(this.timerId);
                        }

                        this.props.onClose(this.props.toastId);
                    }, CLOSE_TIME);
                }
            );
        };

        render() {
            const { time, visible, animation } = this.state;
            const styles = {
                marginBottom: '1em'
            };

            return (
                <Transition animation={animation} duration={time} visible={visible}>
                    <div style={styles} role="presentation">
                        <Component {...this.props} onClose={this.onClose} />
                    </div>
                </Transition>
            );
        }
    }

    return SemanticTransition;
}
