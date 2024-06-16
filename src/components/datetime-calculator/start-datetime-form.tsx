import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, useState } from "react";

export interface StartDatetimeFormProps {
    value: Date;
    onChange: (d: Date) => void
}

export function StartDatetimeForm({ }: StartDatetimeFormProps) {
    const [dateSelector, setDateSelector] = useState<"now" | "manuel">("now");

    const handleSelect = (_: ChangeEvent<HTMLInputElement>, value: string) => {
        setDateSelector(value as "now" | "manuel")
    }

    return <Box alignItems="center">
        <FormControl>
            <RadioGroup
                value={dateSelector}
                onChange={handleSelect}
            >
                <FormControlLabel value="female" control={<Radio />} label="Maintenant" />
                <FormControlLabel value="male" control={<Radio />} label="Manuel" />
            </RadioGroup>
        </FormControl>
    </Box>;
};