import React from 'react';
import Profile from "../social_profile/profile";
import Statistics from "../statistics/statistic";
import FriendList from "../friend_list/FriendList";
import TransactionHistory from "../transaction_history/transactions"
import './App.css';
import user from "../social_profile/user.json";
import stats from "../statistics/statistical-data.json";
import friends from "../friend_list/friends.json";
import transactions from "../transaction_history/transactions.json"




function App() {
  return ( <div className = "App" >     <Profile 
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