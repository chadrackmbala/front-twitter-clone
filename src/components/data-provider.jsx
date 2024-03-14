import { useState } from "react";
import TweetsContext from '../context/TweetsContext'
import InitialData from "../data/initial-data.json";
import axios from 'axios';

export default function DataProvider({ children }) {

    const [tweetData, setTweetData] = useState([]);

    function tweetSeter(newTweet) {
        setTweetData(newTweet);
    }

    async function getTweets() {
        try {
            const response = await axios.get('http://localhost:3001/');
            setTweetData(response.data.tweets);
            return response;
        } catch (error) {
            return error;
        }
    }

    getTweets();

    return (
        <TweetsContext.Provider value={{ tweets: tweetData, tweetSeter }} >
            {children}
        </TweetsContext.Provider>
    )
}