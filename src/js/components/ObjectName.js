import React from 'react';
import Theme from './../themes/getStyle';

export default function getObjectName(props) {
    const {
        parent_type,
        namespace,
        quotesOnKeys,
        theme,
        jsvRoot,
        name,
        displayArrayKey,
        KeyWrapper
    } = props;
    const display_name = props.name ? props.name : '';
    if (jsvRoot && (name === false || name === null)) {
        return <span />;
    } else if (parent_type == 'array') {
        return displayArrayKey ? (
            <span {...Theme(theme, 'array-key')} key={namespace}>
                <span class="array-key">{display_name}</span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        ) : (
            <span />
        );
    } else {
        return (
            <span {...Theme(theme, 'object-name')} key={namespace}>
                <span class="object-key">
                    <KeyWrapper
                        path={namespace.slice(1, namespace.length).join('/')}
                    >
                        {quotesOnKeys && (
                            <span style={{ verticalAlign: 'top' }}>"</span>
                        )}
                        <span>{display_name}</span>
                        {quotesOnKeys && (
                            <span style={{ verticalAlign: 'top' }}>"</span>
                        )}
                    </KeyWrapper>
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        );
    }
}
