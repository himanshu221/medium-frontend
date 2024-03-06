import { Link } from "react-router-dom"

interface PropTypes {
    text: string,
    to: string,
    link: string
}
export const BottomWarning = (props: PropTypes) => {
    return <div className="text-neutral-400 pt-1">
        {props.text} <Link className="underline" to={props.to}>{props.link}</Link>
    </div>
}