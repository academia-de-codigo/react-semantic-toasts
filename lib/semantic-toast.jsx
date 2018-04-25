import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const icons = {
    info: 'announcement',
    success: 'checkmark',
    error: 'remove',
    warning: 'warning circle'
};

function SemanticToast(props) {
    const { type, title, description, onClose, toastId } = props;
    const icon = props.icon || icons[props.type];

    return (
        <Message
            onDismiss={() => {
                onClose(toastId);
            }}
            info={type === 'info'}
            success={type === 'success'}
            error={type === 'error'}
            warning={type === 'warning'}
            header={title}
            content={description}
            icon={icon}
            floating
        />
    );
}

SemanticToast.propTypes = {
    toastId: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    onClose: PropTypes.func
};

SemanticToast.defaultProps = {
    onClose: undefined
};

export default SemanticToast;
