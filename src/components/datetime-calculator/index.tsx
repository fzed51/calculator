import { useMemo, useState } from "react";
import { Operator } from "./types";
import { Stack } from "@mui/material";
import { StartDatetimeForm } from "./start-datetime-form";
import { OperatorForm } from "./operator-form";
import { DiffTimeForm } from "./diff-time-form";
import { ResultDisplay } from "./result-display";

export function DatetimeCalculator() {
    const [startDatetime, setStartDatetime] = useState<Date>(new Date());
    const [operator, setOperator] = useState<Operator>("+");
    const [diffTime, setDiffTime] = useState<number>(0);

    const result: Date = useMemo(() => {
        if (operator === "-") {
            return new Date(startDatetime.getTime() - diffTime)
        }
        return new Date(startDatetime.getTime() + diffTime)
    }, [startDatetime, operator, diffTime])

    return <Stack>
        <StartDatetimeForm />
        <OperatorForm />
        <DiffTimeForm />
        <ResultDisplay result={result} />
    </Stack>
}