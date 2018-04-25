import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SemanticToast from './semantic-toast';
import { store } from './toast';

/* eslint-disable no-useless-computed-key */
const animations = {
    ['top-right']: 'fly left',
    ['top-center']: 'fly down',
    ['top-left']: 'fly right',
    ['bottom-right']: 'fly left',
    ['bottom-center']: 'fly up',
    ['bottom-left']: 'fly right'
};

class SemanticToastContainer extends Component {
    static propTypes = {
        position: PropTypes.oneOf([
            'top-right',
            'top-center',
            'bottom-right',
            'bottom-center',
            'bottom-left'
        ])
    };

    static defaultProps = {
        position: 'top-right'
    };

    state = {
        toasts: []
    };

    componentDidMount() {
        store.subscribe(this.updateToasts);
    }

    componentWillUnmount() {
        store.unsubscribe(this.updateToasts);
    }

    onClose = toastId => {
        const toast = this.state.toasts.find(value => value.id === toastId);
        store.remove(toast);

        if (toast.onClose) {
            toast.onClose();
        }
    };

    updateToasts = () => {
        this.setState({
            toasts: store.data
        });
    };

    render() {
        const { position } = this.props;
        const alert = ['ui', 'icon', 'floating'];
        const animation = animations[position];

        if (window.innerWidth < 425) {
            alert.push('mini');
        }

        return (
            <div className={`ui-alerts ${position}`}>
                {this.state.toasts.map(toast => {
                    const {
                        id,
                        type = 'info',
                        title = '',
                        description = '',
                        icon = 'announcement'
                    } = toast;
                    return (
                        <SemanticToast
                            key={id}
                            toastId={id}
                            type={type}
                            title={title}
                            description={description}
                            icon={icon}
                            animation={animation}
                            onClose={this.onClose}
                        />
                    );
                })}
            </div>
        );
    }
}

export default SemanticToastContainer;
