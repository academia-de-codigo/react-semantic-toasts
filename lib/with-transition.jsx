import React from 'react';
import { Transition } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function withTransitions(Component) {
    class SemanticTransition extends React.Component {
        static propTypes = {
            animation: PropTypes.oneOf([
                'fly left',
                'fly down',
                'fly right',
                'fly left',
                'fly up',
                'fly right'
            ]).isRequired,
            time: PropTypes.number,
            onClose: PropTypes.func.isRequired
        };

        static defaultProps = {
            time: 1000
        };

        state = {
            visible: false,
            time: 500,
            animation: 'pulse'
        };

        componentDidMount() {
            // start animation as soon as toast is mounted in the dom
            this.setState({ visible: true });
        }

        onClose = toastId => {
            // trigger new animation when toast is dismissed
            this.setState(
                {
                    visible: !this.state.visible,
                    animation: this.props.animation,
                    time: this.props.time
                },
                () => {
                    setTimeout(() => this.props.onClose(toastId), this.props.time);
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
