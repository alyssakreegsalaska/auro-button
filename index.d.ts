export interface AuroButton {
    fixed: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    loading?: boolean;
    ondark?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    slim?: boolean;
    arialabel: string;
    arialabelledby: string;
    id: string;
    title: string;
    type: 'submit' | 'reset' | 'button';
    value: string;
}
