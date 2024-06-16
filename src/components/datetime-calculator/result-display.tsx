export interface ResultDisplayProps {
    result: Date
}

export function ResultDisplay({ result }: ResultDisplayProps) {
    return <>ResultDisplay : {result.toLocaleString()}</>;
};
