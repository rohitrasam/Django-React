type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {

    return(
        <>
            <h2>
                {props.isLoggedIn ? `Hello ${props.name}. You have ${props.messageCount} unread messages!` : "Not logged in"}
            </h2>
        </>
    )
}