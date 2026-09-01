import {useState, type FormEvent} from 'react'
import AddSkillButton from './AddSkillButton'
import InputContainer from './InputContainer'
import LevelInputDropdown from './LevelInputDropdown'
import SkillInput from './SkillInput'

type AddSkillFormProps = {
  onAddSkill: (name: string, level: number) => void
}

function AddSkillForm({ onAddSkill }: AddSkillFormProps) {
  const [skillName, setSkillName] = useState('')
  const [skillLevel, setSkillLevel] = useState(1)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!skillName.trim()) return
    onAddSkill(skillName.trim(), skillLevel)
    setSkillName('')
    setSkillLevel(1)
  }

  return (
    <form className="add-skill-form" onSubmit={handleSubmit}>
      <InputContainer>
        <SkillInput value={skillName} onChange={setSkillName} />
        <LevelInputDropdown value={skillLevel} onChange={setSkillLevel} />
        <AddSkillButton />
      </InputContainer>
    </form>
  )
}
export default AddSkillForm