export default function TweetEditorInput({ registerInput }) {
    
    const valueText = "What’s happening?"

    return (
        <>
            <input
                type="text"
                className="tweet-editor-input"
                placeholder={valueText}
                name="inputContent"
                {...registerInput("inputContent", {
                    required: "Veuillez écrire un message svp !",
                    maxLength: {
                        value: 180,
                        message: "Votre message est trop long !"
                    },
                    pattern: {
                        value: /\S/,
                        message: "Votre message est trop long !"
                    }
                })}
            />
        </>
    );
};