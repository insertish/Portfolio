import { ReactNode } from 'react';

interface Props {
    color?: string,
    background?: string,
    children?: ReactNode | ReactNode[],
}

export function Badge(props: Props) {
    return (
        <em style={{ background: props.background, color: props.color }}>
            { props.children }
        </em>
    )
}

import { Library } from '@styled-icons/ionicons-outline';
import { Rust, ReactLogo } from '@styled-icons/fa-brands';
import { WebAsset } from '@styled-icons/material-outlined';
import { Opengl, Javascript, Typescript, Minetest } from '@styled-icons/simple-icons';

interface TechnologyProps {
    tech: string
}

export function TechnologyBadge(props: TechnologyProps) {
    switch (props.tech.toLowerCase().trim()) {
        // Languages
        case 'rust': return <Badge background="#f74c00"><Rust size={24} /> Rust</Badge>;
        case 'javascript': return <Badge background="#f7e018" color="black"><Javascript size={24} /> Javascript</Badge>;
        case 'typescript': return <Badge background="#007acd" color="white"><Typescript size={24} /> Typescript</Badge>;
        // Tags
        case 'opengl': return <Badge background="#ddd" color="#6486a2"><Opengl size={24} /> OpenGL</Badge>;
        case 'react': return <Badge background="#20232a" color="#5bc9e7"><ReactLogo size={24} /> React</Badge>;
        case 'minecraft': return <Badge background="#1c1c1c" color="#34aa2f"><Minetest size={24} /> Minecraft</Badge>;
        // Types
        case 'library': return <Badge><Library size={24} /> Library</Badge>;
        case 'app': return <Badge><WebAsset size={24} /> App</Badge>;
        default: return <Badge>{ props.tech }</Badge>;
    }
}
