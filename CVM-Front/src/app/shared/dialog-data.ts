export interface DialogData {
    header: string;
    body: string;
    icon: DialogIcon;
    data: any;
}

export enum DialogIcon {
    na,
    warn
}

