import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css";



const TransactionHistory = ({items})=>{
    return(
        <table className={styles.transaction_history}>
  <thead >
    <tr className={styles.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
      {items.map(item=>(
   <tr key={item.id} className={styles.cell}>
   <td>{item.type}</td>
   <td>{item.amount}</td>
   <td>{item.currency}</td>
   </tr> 
  ))} 
  </tbody>
</table>
);
};

TransactionHistory.propTypes = {    
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,

    })),
   
};


export default TransactionHistory;