import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';

import withTransition from './with-transition';

class SemanticToast extends PureComponent {
    icons = {
        info: 'announcement',
        success: 'checkmark',
        error: 'remove',
        warning: 'warning circle'
    };

    onDismiss = (e) => {
        e.stopPropagation();
        this.props.onClose();
    };

    render() {
        const { type, title, description, onClick } = this.props;
        const icon = this.props.icon || this.icons[type];

        return (
            <Message
                {...{ [type]: true }}
                onClick={onClick}
                onDismiss={this.onDismiss}
                header={title}
                content={description}
                icon={icon}
                floating
            />
        );
    }
}

SemanticToast.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

SemanticToast.defaultProps = {
    onClick: undefined,
    onClose: undefined
};

export default withTransition(SemanticToast);
