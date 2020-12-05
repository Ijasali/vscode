export enum NavmenuEnum {
    Explorer = 'Explorer',
    Search = 'Search',
    Extensions = 'Extensions'
}

export interface FileExplorerViewModel {
    id: number;
    name: string;
    children?: FileExplorerViewModel[] | FileViewModel[];
    isTopLevel?: boolean;
}


export interface FileViewModel {
    id: number;
    name: string;
    content?: string;
}






