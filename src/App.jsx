import './App.css';
import { useState, useEffect } from 'react';




function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;


  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    const newBalance = calculateBalance();
    setBalance(newBalance);
  }, [transactions]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(apiUrl + '/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const addNewTransaction = async (ev) => {
    ev.preventDefault();
    const url = apiUrl + '/transaction';
    const price = name.split(' ')[0];
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price, name: name.substring(price.length + 1), datetime, description })
      });
      const json = await response.json();
      setName('');
      setDatetime('');
      setDescription('');
      setTransactions(prevTransactions => [...prevTransactions, json]);
      console.log('Result:', json);
    } catch (error) {
      console.error('Error adding new transaction:', error);
    }
  };

  const calculateBalance = () => {
    let balance = 0;
    for (const transaction of transactions) {
      balance += parseFloat(transaction.price);
    }
    return balance.toFixed(2);
  };

  const fraction = calculateBalance().toString().split('.')[1];


  return (
    <main>
      <h1>${balance}<span>{fraction}</span></h1>

      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder={'-$200 new TV'} />
          <input type="datetime-local" value={datetime} onChange={ev => setDatetime(ev.target.value)} />
        </div>
        <div className="description">
          <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} placeholder={'description'} />
        </div>
        <button type="submit">Add Transaction</button>
      </form>

      <div className="transactions">
        {transactions.map(transaction => (
        <div className="transaction" key={transaction.id}>
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
            <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>{transaction.price}</div>
            <div className="date">{transaction.datetime}</div>
          </div>
      </div>
    ))}
    </div>
  </main>
  );
}

export default App;
