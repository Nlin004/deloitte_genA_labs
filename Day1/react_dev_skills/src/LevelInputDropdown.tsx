type LevelInputDropdownProps = {
    value: number,
    onChange: (newValue: number) => void,
}

function LevelInputDropdown({ value, onChange }: LevelInputDropdownProps) {
    return (
        <label>
            Level
            <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
                {[1,2,3,4,5].map((n) => (
                    <option key={n} value={n}>Level {n}</option>
                    ))}
            </select>
        </label>
    )
}

export default LevelInputDropdown
            