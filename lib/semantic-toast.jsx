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

function SemanticToast({
    type,
    title,
    description,
    size,
    color,
    list,
    onClose,
    onClick,
    onDismiss,
    ...props
}) {
    const computedIcon = props.icon || icons[type];

    const onDispel = e => {
        e.stopPropagation();
        onDismiss();
        onClose();
    };

    return (
        <Message
            {...{ [type]: true }}
            onClick={onClick}
            onDismiss={onDispel}
            header={title}
            content={description}
            icon={computedIcon}
            size={size}
            color={color}
            list={list}
            floating
            {...props}
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
    list: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onDismiss: PropTypes.func,
    onClose: PropTypes.func
};

SemanticToast.defaultProps = {
    onClick: undefined,
    onDismiss: () => undefined,
    onClose: () => undefined,
    icon: undefined,
    color: undefined,
    list: undefined,
    size: 'medium'
};

export default withTransition(SemanticToast);
