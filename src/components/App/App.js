import React from 'react';
import SocialProfile from "../SocialProfile/SocialProfile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import './App.css';
import user from "../../database/user.json";
import stats from "../../database/statistical-data.json";
import friends from "../../database/friends.json";
import transactions from "../../database/transactions.json"




function App() {
  return ( <div className = "App" >     <SocialProfile 
    name = {user.name}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}/>
    
    <Statistics title = "Upload stats"
    stats = {stats}/>

    <FriendList friends = {friends}/>

    <TransactionHistory items={transactions} />


    </div>


  );
}

export default App;