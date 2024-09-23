import { Stack, TextField } from "@mui/material";

export interface DiffTimeFormProps {
    value: number
    onChange: (v: number) => void
}

export function DiffTimeForm({ value, onChange }: DiffTimeFormProps) {
    const totalSecond = Math.round(value / 1000)
    const seconde = totalSecond % 60
    const totalMinute = Math.floor(totalSecond / 60)
    const minute = totalMinute % 60
    const totalHoure = Math.floor(totalMinute / 60)
    const houre = totalHoure % 60
    const day = Math.floor(totalHoure / 24)
    console.log({
        totalSecond,
        seconde,
        totalMinute,
        minute,
        totalHoure,
        houre,
        day,
    })

    const handleChange = (d: number, h: number, m: number, s: number) => {
        console.log({ d, h, m, s })
        d = isNaN(d) ? 0 : d
        h = isNaN(h) ? 0 : h
        m = isNaN(m) ? 0 : m
        s = isNaN(s) ? 0 : s
        const ms = (((d * 24 + h) * 60 + m) * 60 + s) * 1000
        onChange(ms)
    }
    return <Stack direction="row">
        <TextField variant="outlined" value={day} onChange={(e) => handleChange(Number(e.target.value), houre, minute, seconde)} />d
        <TextField variant="outlined" value={houre} onChange={(e) => handleChange(day, Number(e.target.value), minute, seconde)} />h
        <TextField variant="outlined" value={minute} onChange={(e) => handleChange(day, houre, Number(e.target.value), seconde)} />m
        <TextField variant="outlined" value={seconde} onChange={(e) => handleChange(day, houre, minute, Number(e.target.value),)} />s
    </Stack>;
};

export default DiffTimeForm;
