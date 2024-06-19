import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";

export interface StartDatetimeFormProps {
    value: Date;
    onChange: (d: Date) => void
}

export function StartDatetimeForm({ value, onChange }: StartDatetimeFormProps) {
    const [dateSelector, setDateSelector] = useState<"now" | "manuel">("now");

    useEffect(() => {
        if (dateSelector === "now") {
            onChange(new Date())
            const id = setInterval(() => {
                onChange(new Date())
            }, 1000 * 60)
            return () => {
                clearInterval(id)
            }
        }
    }, [dateSelector])

    const handleSelect = (_: ChangeEvent<HTMLInputElement>, value: string) => {
        setDateSelector(value as "now" | "manuel")
    }

    return <Box alignItems="center">
        <FormControl>
            <RadioGroup
                value={dateSelector}
                onChange={handleSelect}
            >
                <FormControlLabel value="now" control={<Radio />} label="Maintenant" />
                < FormControlLabel value="manuel" control={<Radio />} label="Manuel" />
                <Stack direction="row" alignItems="center">
                    <DatePicker
                        disabled={dateSelector === "now"}
                        format="DD/MM/YYYY"
                        value={dayjs(value)}
                        onChange={d => d && onChange(new Date(d.toJSON()))}
                    />
                    -
                    <TimePicker
                    ampm={false}
                        disabled={dateSelector === "now"}
                        value={dayjs(value)}
                        onChange={d => d && onChange(new Date(d.toJSON()))}
                    />
                </Stack>
            </RadioGroup>
        </FormControl>
    </Box>;
};