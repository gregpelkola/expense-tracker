import './App.css'

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      
      <form>
        <div className="basic">
          <input type="text" placeholder={'+200 new TV'}/>
          <input type="datetime-local"/>
        </div>
        <div className="description">
          <input type="text" placeholder={'description'}/>
        </div>
          <button type="submit">Add Transaction</button>
        </form>
        
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description">Wanted a new TV</div> 
          </div>
          <div className="right">
            <div className="price">+200</div>
            <div className="date">03-12-2024 5:35PM</div>
            
            <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description">Wanted a new TV</div> 
          </div>
          <div className="right">
            <div className="price">+200</div>
            <div className="date">03-12-2024 5:35PM</div>
        </div>
        
        <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description">Wanted a new TV</div> 
          </div>
          <div className="right">
            <div className="price">+200</div>
            <div className="date">03-12-2024 5:35PM</div>
        </div>
        </div>
    </main>
  );
}

export default App;
