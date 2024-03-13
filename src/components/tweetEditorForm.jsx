import TweetEditorInput from './tweetEditorInput';
import { useState, useContext, useRef } from 'react';
import TweetsContext from '../context/TweetsContext';
import TweetButton from './tweetButton';
import TweetEditorActions from "./tweetEditorActions";
import UserContext from '../context/UserContext';
import { newyorkTime, tweetProfilePhoto, tweetLogo, cnnAvatar, userProfil } from '../images/index';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useUserStore from "../context/UserContext";

export default function TweetEditorForm() {

    const { psuedo } = useUserStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        let newTweet;

        newTweet = {
            tweetAvatar: userProfil,
            tweetTitle: currentUser.name,
            tweetP: "@CNN . 7m",
            tweetText: data.inputContent,
            comments: 0,
            retweet: 0,
            likes: 0
        }

        try {
            
            const response = await axios.post('https://65b7cc9846324d531d558a48.mockapi.io/tweets', newTweet);
            console.log(response);
            {
                /*
                alert(`Vous venez d'enregistrer les informations suivantes : 
                  Titre : ${newTweet.tweetTitle} ;
                  Pseudo : ${newTweet.tweetP} ;
                  Texte : ${newTweet.tweetText} ;
                  Commentaires : ${newTweet.comments} ;
                  Retweets : ${newTweet.retweet}
                  Likes : ${newTweet.likes}`
            );
                */
            }
            reset();
          } catch (error) {
            console.error("Une erreur s'est produite:", error);
            alert("Une erreur s'est produite lors de l'envoi des données");
          }

          console.log(newTweet);
    };

    let currentUser = useContext(UserContext);
    const { tweets, tweetSeter } = useContext(TweetsContext);
    const [inputText, setInputText] = useState("");

    //function handleTweetInputChange(text) {
    //setInputText(text);
    //}

    const tweetInput = useRef(null);

    const [newTweetData, setNewTweetData] = useState("");

    //const userId = tweets.length + 1;

    function handleButtonClick(e) {
        e.preventDefault();

        let newTweet

        newTweet = {
            tweetAvatar: userProfil,
            tweetTitle: currentUser.name,
            tweetP: "@CNN . 7m",
            tweetText: inputText,
            comments: 0,
            retweet: 0,
            likes: 0
        }
        // console.log("New Tweet :", newTweet);
        setNewTweetData(newTweet)
        tweetSeter([newTweet, ...tweets]);
        tweetInput.current.value = "";

        console.log("New Tweet :", newTweetData);
    }

    return (
        <>
            <div className="tweet-editor-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TweetEditorInput registerInput={register} />
                    {errors.inputContent && (
                        <span style={{ color: "red" }}>{errors.inputContent.message}</span>
                    )}
                    <div className="tweet-editor-buttons">
                        <TweetEditorActions />
                        <TweetButton style={"tweet-editor-button"} />
                    </div>
                </form>

            </div>
        </>
    );
};



{
    //onInputChange={handleTweetInputChange}
}
// import useUserStore from "../context/UserContext";
// const { psuedo } = useUserStore();
