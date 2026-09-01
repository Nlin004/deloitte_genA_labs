type LevelBadgeProps = {
    level: number,
}

function LevelBadge({ level }: LevelBadgeProps) {
    return (
        <span className="level-badge">
            Level {level}
        </span>
    )
}

export default LevelBadge