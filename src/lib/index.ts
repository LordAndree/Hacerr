export type CheckLists = {
    id: string;
    subject: string;
    description: string;
    date: Date;
    importanceId: Importances;
};

export type Importances = {
    id: number;
    desc?: string;
};


