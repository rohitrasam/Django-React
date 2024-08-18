type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {

    return (
        <>
            {props.names.map(person => {
                return (<h2 key={person.first}>{person.first} {person.last}</h2>)
            })}
        </>
    )
}