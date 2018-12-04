import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import withTransition from './with-transition';

import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';

const icons = {
    info: 'announcement',
    success: 'checkmark',
    error: 'remove',
    warning: 'warning circle'
};

function SemanticToast(props) {
    const { type, title, description, onClose, onClick } = props;
    const icon = props.icon || icons[type];

    const onDismiss = e => {
        e.stopPropagation();
        onClose();
    };

    return (
        <Message
            {...{ [type]: true }}
            onClick={onClick}
            onDismiss={onDismiss}
            header={title}
            content={description}
            icon={icon}
            floating
        />
    );
}

SemanticToast.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

SemanticToast.defaultProps = {
    onClick: undefined,
    onClose: undefined,
    icon: undefined
};

export default withTransition(SemanticToast);
