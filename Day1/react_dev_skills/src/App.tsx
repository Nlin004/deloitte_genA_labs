import { useState } from 'react'
import AddSkillForm from './AddSkillForm'
import Title from './Title'
import type { Skill } from './types'
import List from './List'
import './App.css'


const initialSkills: Skill[] = [
  { id: 1, name: 'React', level: 3 },
  { id: 2, name: 'TypeScript', level: 2 },
  { id: 3, name: 'JavaScript', level: 4 },
  { id: 4, name: 'HTML', level: 5 },
]

function App() {
  const [skills, setSkills] = useState<Skill[]>(initialSkills)
  function addSkill(name: string, level: number) {
    setSkills((prevSkills) => [...prevSkills, { id: prevSkills.length + 1, name, level }])
  }
  return (
    <>
    <div className="app">
      <Title />
      <List skills={skills} />
      <AddSkillForm onAddSkill={addSkill} />
    </div>
    </>
  )
}

export default App
