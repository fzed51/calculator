import { Box, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Operator } from "./types";
export interface OperatorFormProps {
    value: Operator;
    onChange: (o: Operator) => void;
}

export function OperatorForm({ value, onChange }: OperatorFormProps) {

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        operator: string,
    ) => {
        if (["-", "+"].includes(operator)) {
            onChange(operator as Operator);
        }
    };

    const control = {
        value,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Box alignItems="center">
            <Stack spacing={2} alignItems="center">
                <ToggleButtonGroup {...control}>
                    <ToggleButton value="+" key="add">
                        <AddIcon />
                    </ToggleButton>,
                    <ToggleButton value="-" key="remove">
                        <RemoveIcon />
                    </ToggleButton>,
                </ToggleButtonGroup>
            </Stack>
        </Box>
    );
};

export default OperatorForm;
