export interface filterEntity {
    type: string,
    data_bs_target: string,
    aria_controls: string,
    aria_labelledby: string,
    listOfProps?: listOfProps[]
};

export interface listOfProps {
    name: string,
    checked: boolean,
    id: number,
};
