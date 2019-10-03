/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

declare module 'art' {
    function Path(svg: string): any;
    function Tween(path1: string, path2: string): any;
}
