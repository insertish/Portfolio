import { ReactNode, Fragment } from 'react';
import styles from './Badge.module.scss';
import { Tooltip } from 'react-tippy';

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
        <Tooltip
            disabled={!props.mini}
            followCursor={false}
            title={props.text}
            position="top"
            arrow
        >
            <em className={styles.badge}
                style={{ background: props.background, color: props.color }}
                data-mini={props.mini}
            >
                { props.icon }
                <span>
                    { props.text ?? props.children }
                </span>
            </em>
        </Tooltip>
    )
}

import { Robot, Wrench } from '@styled-icons/fa-solid';
import { ClassicComputer } from '@styled-icons/entypo';
import { Server } from '@styled-icons/boxicons-regular';
import { Rust, ReactLogo, Sass } from '@styled-icons/fa-brands';
import { WebAsset, Security } from '@styled-icons/material-outlined';
import { KanbanFill, FileBinaryFill, FileEarmarkBinary, GearFill } from '@styled-icons/bootstrap';
import { Library, Globe, GameController, HelpCircle, MusicalNotes, School } from '@styled-icons/ionicons-outline';
import { Opengl, Javascript, Typescript, Minetest, Nextdotjs, Discord, Nodedotjs, Jest, Redux, Mysql, Mongodb, Sqlite, Java, Rollupdotjs, C, Cplusplus, Python, Electron, Webgl, Android, Vuedotjs } from '@styled-icons/simple-icons';

interface TechnologyProps {
    tech: string,
    mini?: boolean
}

export function TechnologyBadge(props: TechnologyProps) {
    const size = props.mini ? 16 : 24;

    switch (props.tech.toLowerCase().trim()) {
        // Languages
        case 'c': return <Badge background="#5c6bbe" mini={props.mini} text="C" icon={<C size={size} />} />;
        case 'c++': return <Badge background="#6599d2" mini={props.mini} text="C++" icon={<Cplusplus size={size} />} />;
        case 'java': return <Badge background="#f66701" mini={props.mini} text="Java" icon={<Java size={size} />} />;
        case 'rust': return <Badge background="#f74c00" mini={props.mini} text="Rust" icon={<Rust size={size} />} />;
        case 'python': return <Badge background="#fdc231" color="#356995" mini={props.mini} text="Python" icon={<Python size={size} />} />;
        case 'assembly': return <Badge background="#0e143c" mini={props.mini} text="Assembly" icon={<FileEarmarkBinary size={size} />} />;
        case 'javascript': return <Badge background="#f7e018" color="black" mini={props.mini} text="Javascript" icon={<Javascript size={size} />} />;
        case 'typescript': return <Badge background="#007acd" mini={props.mini} text="Typescript" icon={<Typescript size={size} />} />;
        // Tags
        case 'opengl': return <Badge background="#ccc" color="#6486a2" mini={props.mini} text="OpenGL" icon={<Opengl size={size} />} />;
        case 'webgl': return <Badge background="#971319" mini={props.mini} text="WebGL" icon={<Webgl size={size} />} />;
        case 'react': return <Badge background="#20232a" color="#5bc9e7" mini={props.mini} text="React" icon={<ReactLogo size={size} />} />;
        case 'next.js': return <Badge background="#ededed" color="black" mini={props.mini} text="Next.js" icon={<Nextdotjs size={size} />} />;
        case 'minecraft': return <Badge background="#1c1c1c" color="#34aa2f" mini={props.mini} text="Minecraft" icon={<Minetest size={size} />} />;
        case 'node.js': return <Badge background="#333333" color="#689f63" mini={props.mini} text="Node.js" icon={<Nodedotjs size={size} />} />;
        case 'discord': return <Badge background="#7289DA" mini={props.mini} text="Discord" icon={<Discord size={size} />} />;
        case 'bot': return <Badge mini={props.mini} text="Bot" icon={<Robot size={size} />} />;
        case 'ci': return <Badge mini={props.mini} text="CI" icon={<Robot size={size} />} />;
        case 'jest': return <Badge background="#99425b" mini={props.mini} text="Jest" icon={<Jest size={size} />} />;
        case 'music': return <Badge mini={props.mini} text="Music" icon={<MusicalNotes size={size} />} />;
        case 'kanban': return <Badge mini={props.mini} text="Kanban" icon={<KanbanFill size={size} />} />;
        case 'redux': return <Badge background="#764abc" mini={props.mini} text="Redux" icon={<Redux size={size} />} />;
        case 'sass': return <Badge background="#bf4080" mini={props.mini} text="Sass" icon={<Sass size={size} />} />;
        case 'school': return <Badge mini={props.mini} text="School" icon={<School size={size} />} />;
        case 'mysql': return <Badge background="#df7610" mini={props.mini} text="MySQL" icon={<Mysql size={size} />} />;
        case 'mongodb': return <Badge background="#56b054" mini={props.mini} text="MongoDB" icon={<Mongodb size={size} />} />;
        case 'sqlite': return <Badge background="#003b57" mini={props.mini} text="SQLite" icon={<Sqlite size={size} />} />;
        case 'rollup.js': return <Badge background="#f03334" mini={props.mini} text="rollup.js" icon={<Rollupdotjs size={size} />} />;
        case 'cybersec': return <Badge mini={props.mini} text="Cyber Security" icon={<Security size={size} />} />;
        case 'lowlevel': return <Badge mini={props.mini} text="Low-level Programming" icon={<FileBinaryFill size={size} />} />;
        case 'electron': return <Badge background="#272a37" color="#272a37" mini={props.mini} text="Electron" icon={<Electron size={size} />} />;
        case 'android': return <Badge background="#3ed785" mini={props.mini} text="Android" icon={<Android size={size} />} />;
        case 'vue.js': return <Badge background="#35495e" color="#41b883" mini={props.mini} text="Vue.js" icon={<Vuedotjs size={size} />} />;
        // Types
        case 'website': return <Badge mini={props.mini} text="Website" icon={<Globe size={size} />} />;
        case 'app': return <Badge mini={props.mini} text="App" icon={<WebAsset size={size} />} />;
        case 'library': return <Badge mini={props.mini} text="Library" icon={<Library size={size} />} />;
        case 'game': return <Badge mini={props.mini} text="Game" icon={<GameController size={size} />} />;
        case 'service': return <Badge mini={props.mini} text="Service" icon={<Server size={size} />} />;
        case 'utility': return <Badge mini={props.mini} text="Utility" icon={<GearFill size={size} />} />;
        case 'mod': return <Badge mini={props.mini} text="Mod" icon={<Wrench size={size} />} />;
        case 'os': return <Badge mini={props.mini} text="Operating System" icon={<ClassicComputer size={size} />} />;
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
