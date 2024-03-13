import React, { useContext } from 'react';
import Tweet from './tweet';
import UserService from '../utils/tweetsData';
import InitialData from '../data/initial-data.json';
import TweetsContext from '../context/TweetsContext';
import NweTweetContext from '../context/NweTweetContext';

export default function Tweets() {

    const nweTweetContext = useContext(NweTweetContext);

    const { tweets } = useContext(TweetsContext);

    const tweetsArray = [...tweets].reverse();

    return (
        <>
            <div>
                {tweetsArray.map((tweet, index) => {
                    return <Tweet tweet={tweet} key={index} />
                })}
            </div>
        </>
    );
};