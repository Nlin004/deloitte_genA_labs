import LevelBadge from "./LevelBadge";

type ListItemProps = {

    name: string,
    level: number,
    
}

function ListItem({ name, level }: ListItemProps) {
    return (
        <div className="list-item">
            <span className="skill-name">{name}</span>
            <LevelBadge level={level} />
        </div>


    )
}

export default ListItem