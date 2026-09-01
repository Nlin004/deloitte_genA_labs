
import ListItem from "./ListItem";


import type { Skill } from "./types";

type ListProps = {
    skills: Skill[],
}

function List({ skills }: ListProps) {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <ListItem key={skill.id} name={skill.name} level={skill.level} />
            ))}
        </div>
    )
}

export default List