import PropTypes from 'prop-types';
import SemanticToast from './semantic-toast';
import { store } from './toast';
import React, { Component } from 'react';

import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/icon.min.css';

import '../styles/react-semantic-alert.css';


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
  constructor(props) {
    super(props);

    this.state = {
      toasts: []
    };
  }

  componentDidMount() {
    store.subscribe(this.updateToasts);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateToasts);
  }

  onClose = toastId => {
    const toast = this.state.toasts.find(value => value.id === toastId);

    // toast has been removed already, fixes #1
    if (!toast) {
      return;
    }

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
    const { position, className } = this.props;
    const animation = this.props.animation || animations[position];

    return (
      <div className={`ui-alerts ${position} ${className}`}>
        {this.state.toasts.map(toast => {
          const {
            id,
            type = 'info',
            title = '',
            description = '',
            icon = 'announcement',
            time,
            onClick = () => {}
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
              time={time}
              onClick={onClick}
              onClose={this.onClose}
            />
          );
        })}
      </div>
    );
  }
}

export default SemanticToastContainer;

SemanticToastContainer.propTypes = {
  position: PropTypes.oneOf([
    'top-right',
    'top-center',
    'top-left',
    'bottom-right',
    'bottom-center',
    'bottom-left'
  ]),
  animation: PropTypes.string,
  className: PropTypes.string
};

SemanticToastContainer.defaultProps = {
  position: 'top-right',
  animation: null
};
