type SkillInputProps = {
    value: string,
    onChange: (newValue: string) => void
}

function SkillInput({ value, onChange }: SkillInputProps) {
    return (
        <label>
            Skill
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </label>
    )
}

export default SkillInput   