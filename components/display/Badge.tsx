import { ReactNode } from "react";

interface BaseProps {
    text?: string;
    mini?: boolean;
    color?: string;
    icon?: ReactNode;
    background?: string;
    children?: ReactNode | ReactNode[];
}

export function Base(props: BaseProps) {
    return (
        /*<Tooltip
            disabled={!props.mini}
            followCursor={false}
            title={props.text}
            position="top"
            arrow
        >*/
        <em
            style={{ background: props.background, color: props.color }}
            data-mini={props.mini}>
            {props.icon}
            <span>{props.text ?? props.children}</span>
        </em>
        // </Tooltip>
    );
}

import { Robot, Wrench } from "@styled-icons/fa-solid";
import { ClassicComputer } from "@styled-icons/entypo";
import { Server } from "@styled-icons/boxicons-regular";
import { Rust, ReactLogo, Sass } from "@styled-icons/fa-brands";
import { WebAsset, Security } from "@styled-icons/material-outlined";
import {
    KanbanFill,
    FileBinaryFill,
    FileEarmarkBinary,
    GearFill,
} from "@styled-icons/bootstrap";
import {
    Library,
    Globe,
    GameController,
    HelpCircle,
    MusicalNotes,
    School,
} from "@styled-icons/ionicons-outline";
import {
    Opengl,
    Javascript,
    Typescript,
    Minetest,
    Nextdotjs,
    Discord,
    Nodedotjs,
    Jest,
    Redux,
    Mysql,
    Mongodb,
    Sqlite,
    Java,
    Rollupdotjs,
    C,
    Cplusplus,
    Python,
    Electron,
    Webgl,
    Android,
    Vuedotjs,
} from "@styled-icons/simple-icons";

interface Props {
    tech: string;
    mini?: boolean;
}

export function Badge(props: Props) {
    const size = props.mini ? 16 : 24;

    switch (props.tech.toLowerCase().trim()) {
        // Languages
        case "c":
            return (
                <Base
                    background="#5c6bbe"
                    mini={props.mini}
                    text="C"
                    icon={<C size={size} />}
                />
            );
        case "c++":
            return (
                <Base
                    background="#6599d2"
                    mini={props.mini}
                    text="C++"
                    icon={<Cplusplus size={size} />}
                />
            );
        case "java":
            return (
                <Base
                    background="#f66701"
                    mini={props.mini}
                    text="Java"
                    icon={<Java size={size} />}
                />
            );
        case "rust":
            return (
                <Base
                    background="#f74c00"
                    mini={props.mini}
                    text="Rust"
                    icon={<Rust size={size} />}
                />
            );
        case "python":
            return (
                <Base
                    background="#fdc231"
                    color="#356995"
                    mini={props.mini}
                    text="Python"
                    icon={<Python size={size} />}
                />
            );
        case "assembly":
            return (
                <Base
                    background="#0e143c"
                    mini={props.mini}
                    text="Assembly"
                    icon={<FileEarmarkBinary size={size} />}
                />
            );
        case "javascript":
            return (
                <Base
                    background="#f7e018"
                    color="black"
                    mini={props.mini}
                    text="Javascript"
                    icon={<Javascript size={size} />}
                />
            );
        case "typescript":
            return (
                <Base
                    background="#007acd"
                    mini={props.mini}
                    text="Typescript"
                    icon={<Typescript size={size} />}
                />
            );
        // Tags
        case "opengl":
            return (
                <Base
                    background="#ccc"
                    color="#6486a2"
                    mini={props.mini}
                    text="OpenGL"
                    icon={<Opengl size={size} />}
                />
            );
        case "webgl":
            return (
                <Base
                    background="#971319"
                    mini={props.mini}
                    text="WebGL"
                    icon={<Webgl size={size} />}
                />
            );
        case "react":
            return (
                <Base
                    background="#20232a"
                    color="#5bc9e7"
                    mini={props.mini}
                    text="React"
                    icon={<ReactLogo size={size} />}
                />
            );
        case "next.js":
            return (
                <Base
                    background="#ededed"
                    color="black"
                    mini={props.mini}
                    text="Next.js"
                    icon={<Nextdotjs size={size} />}
                />
            );
        case "minecraft":
            return (
                <Base
                    background="#1c1c1c"
                    color="#34aa2f"
                    mini={props.mini}
                    text="Minecraft"
                    icon={<Minetest size={size} />}
                />
            );
        case "node.js":
            return (
                <Base
                    background="#333333"
                    color="#689f63"
                    mini={props.mini}
                    text="Node.js"
                    icon={<Nodedotjs size={size} />}
                />
            );
        case "discord":
            return (
                <Base
                    background="#7289DA"
                    mini={props.mini}
                    text="Discord"
                    icon={<Discord size={size} />}
                />
            );
        case "bot":
            return (
                <Base
                    mini={props.mini}
                    text="Bot"
                    icon={<Robot size={size} />}
                />
            );
        case "ci":
            return (
                <Base
                    mini={props.mini}
                    text="CI"
                    icon={<Robot size={size} />}
                />
            );
        case "jest":
            return (
                <Base
                    background="#99425b"
                    mini={props.mini}
                    text="Jest"
                    icon={<Jest size={size} />}
                />
            );
        case "music":
            return (
                <Base
                    mini={props.mini}
                    text="Music"
                    icon={<MusicalNotes size={size} />}
                />
            );
        case "kanban":
            return (
                <Base
                    mini={props.mini}
                    text="Kanban"
                    icon={<KanbanFill size={size} />}
                />
            );
        case "redux":
            return (
                <Base
                    background="#764abc"
                    mini={props.mini}
                    text="Redux"
                    icon={<Redux size={size} />}
                />
            );
        case "sass":
            return (
                <Base
                    background="#bf4080"
                    mini={props.mini}
                    text="Sass"
                    icon={<Sass size={size} />}
                />
            );
        case "school":
            return (
                <Base
                    mini={props.mini}
                    text="School"
                    icon={<School size={size} />}
                />
            );
        case "mysql":
            return (
                <Base
                    background="#df7610"
                    mini={props.mini}
                    text="MySQL"
                    icon={<Mysql size={size} />}
                />
            );
        case "mongodb":
            return (
                <Base
                    background="#56b054"
                    mini={props.mini}
                    text="MongoDB"
                    icon={<Mongodb size={size} />}
                />
            );
        case "sqlite":
            return (
                <Base
                    background="#003b57"
                    mini={props.mini}
                    text="SQLite"
                    icon={<Sqlite size={size} />}
                />
            );
        case "rollup.js":
            return (
                <Base
                    background="#f03334"
                    mini={props.mini}
                    text="rollup.js"
                    icon={<Rollupdotjs size={size} />}
                />
            );
        case "cybersec":
            return (
                <Base
                    mini={props.mini}
                    text="Cyber Security"
                    icon={<Security size={size} />}
                />
            );
        case "lowlevel":
            return (
                <Base
                    mini={props.mini}
                    text="Low-level Programming"
                    icon={<FileBinaryFill size={size} />}
                />
            );
        case "electron":
            return (
                <Base
                    background="#272a37"
                    color="#272a37"
                    mini={props.mini}
                    text="Electron"
                    icon={<Electron size={size} />}
                />
            );
        case "android":
            return (
                <Base
                    background="#3ed785"
                    mini={props.mini}
                    text="Android"
                    icon={<Android size={size} />}
                />
            );
        case "vue.js":
            return (
                <Base
                    background="#35495e"
                    color="#41b883"
                    mini={props.mini}
                    text="Vue.js"
                    icon={<Vuedotjs size={size} />}
                />
            );
        // Types
        case "website":
            return (
                <Base
                    mini={props.mini}
                    text="Website"
                    icon={<Globe size={size} />}
                />
            );
        case "app":
            return (
                <Base
                    mini={props.mini}
                    text="App"
                    icon={<WebAsset size={size} />}
                />
            );
        case "library":
            return (
                <Base
                    mini={props.mini}
                    text="Library"
                    icon={<Library size={size} />}
                />
            );
        case "game":
            return (
                <Base
                    mini={props.mini}
                    text="Game"
                    icon={<GameController size={size} />}
                />
            );
        case "service":
            return (
                <Base
                    mini={props.mini}
                    text="Service"
                    icon={<Server size={size} />}
                />
            );
        case "utility":
            return (
                <Base
                    mini={props.mini}
                    text="Utility"
                    icon={<GearFill size={size} />}
                />
            );
        case "mod":
            return (
                <Base
                    mini={props.mini}
                    text="Mod"
                    icon={<Wrench size={size} />}
                />
            );
        case "os":
            return (
                <Base
                    mini={props.mini}
                    text="Operating System"
                    icon={<ClassicComputer size={size} />}
                />
            );
        case "other":
            return (
                <Base
                    mini={props.mini}
                    text="Other"
                    icon={<HelpCircle size={size} />}
                />
            );
        default:
            return props.mini ? null : <Base>{props.tech}</Base>;
    }
}
