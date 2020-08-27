import { ReactNode, Fragment } from 'react';

interface Props {
    text?: string,
    mini?: boolean,
    color?: string,
    icon?: ReactNode,
    background?: string,
    children?: ReactNode | ReactNode[],
}

export function Badge(props: Props) {
    return (
        <em style={{ background: props.background, color: props.color }} data-mini={props.mini}>
            { props.icon }
            <span>
                { props.text ?? props.children }
            </span>
        </em>
    )
}

import { Rust, ReactLogo } from '@styled-icons/fa-brands';
import { WebAsset } from '@styled-icons/material-outlined';
import { Library, Globe, GameController, HelpCircle } from '@styled-icons/ionicons-outline';
import { Opengl, Javascript, Typescript, Minetest, NextDotJs } from '@styled-icons/simple-icons';

interface TechnologyProps {
    tech: string,
    mini?: boolean
}

export function TechnologyBadge(props: TechnologyProps) {
    const size = props.mini ? 16 : 24;

    switch (props.tech.toLowerCase().trim()) {
        // Languages
        case 'rust': return <Badge background="#f74c00" mini={props.mini} text="Rust" icon={<Rust size={size} />} />;
        case 'javascript': return <Badge background="#f7e018" color="black" mini={props.mini} text="Javascript" icon={<Javascript size={size} />} />;
        case 'typescript': return <Badge background="#007acd" color="white" mini={props.mini} text="Typescript" icon={<Typescript size={size} />} />;
        // Tags
        case 'opengl': return <Badge background="#ddd" color="#6486a2" mini={props.mini} text="OpenGL" icon={<Opengl size={size} />} />;
        case 'react': return <Badge background="#20232a" color="#5bc9e7" mini={props.mini} text="React" icon={<ReactLogo size={size} />} />;
        case 'next.js': return <Badge background="#ededed" color="black" mini={props.mini} text="Next.js" icon={<NextDotJs size={size} />} />;
        case 'minecraft': return <Badge background="#1c1c1c" color="#34aa2f" mini={props.mini} text="Minecraft" icon={<Minetest size={size} />} />;
        // Types
        case 'website': return <Badge mini={props.mini} text="Website" icon={<Globe size={size} />} />;
        case 'app': return <Badge mini={props.mini} text="App" icon={<WebAsset size={size} />} />;
        case 'library': return <Badge mini={props.mini} text="Library" icon={<Library size={size} />} />;
        case 'game': return <Badge mini={props.mini} text="Game" icon={<GameController size={size} />} />;
        case 'other': return <Badge mini={props.mini} text="Other" icon={<HelpCircle size={size} />} />;
        default: return props.mini ? null : <Badge>{ props.tech }</Badge>;
    }
}

interface TechListProps {
    techs: string,
    mini?: boolean
}

export function TechList(props: TechListProps) {
    return (
        <Fragment>
            { props.techs.split(',').map(x => <TechnologyBadge tech={x} mini={props.mini} />) }
        </Fragment>
    );
}
