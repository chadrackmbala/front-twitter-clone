import TopTweetsIcon from "../icons/Timeline-Prop.png"

export default function Header() {
    return (
        <>
            <div className="header">
                <h1 className="page-title text-3xl font-bold underline">HOME</h1>
                <img src={TopTweetsIcon} className="top-tweets-icon" alt="top-twets-icon" />
            </div>
        </>
    )
}