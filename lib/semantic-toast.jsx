import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import withTransition from './with-transition';

const icons = {
    info: 'announcement',
    success: 'checkmark',
    error: 'remove',
    warning: 'warning circle'
};

function SemanticToast(props) {
    const { type, title, description, size, color, onClose, onClick } = props;
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
            size={size}
            color={color}
            floating
        />
    );
}

SemanticToast.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string, 
        PropTypes.node
    ]).isRequired,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    size: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

SemanticToast.defaultProps = {
    onClick: undefined,
    onClose: undefined,
    icon: undefined
};

export default withTransition(SemanticToast);
