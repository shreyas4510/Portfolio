export interface TProps {
    theme?: string;
    setTheme?: (e: string) => void;
    scrollToComponent?: (index: number) => void;
}

export interface ProjectProps {
    title: string;
    img: string;
    gitLink: string;
    live: string;
    description: string;
    features: Record<string, string>[];
    skills: string[]
}
