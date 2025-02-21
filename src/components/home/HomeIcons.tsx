import React from 'react';
import { IconBaseProps } from 'react-icons';
import Icon from 'phosphor-react';

interface PropsHomeIcons {
    title: string
    icon: IconBaseProps | Icon.IconProps
}

export function HomeIcons(props: PropsHomeIcons) {

    return (
        <>
            {props.icon}
        </>
    )
}