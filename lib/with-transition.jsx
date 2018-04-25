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
            time: 2000
        };

        state = {
            visible: true
        };

        onClose = toastId => {
            this.setState({ visible: !this.state.visible });
            setTimeout(() => this.props.onClose(toastId), this.props.time);
        };

        render() {
            const { time, animation } = this.props;
            const styles = {
                marginBottom: '1em'
            };

            return (
                <Transition animation={animation} duration={time} visible={this.state.visible}>
                    <div style={styles} role="presentation">
                        <Component {...this.props} onClose={this.onClose} />
                    </div>
                </Transition>
            );
        }
    }

    return SemanticTransition;
}
