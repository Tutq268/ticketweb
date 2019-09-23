import React from 'react';
import MainPage from './clientsPage/mainpage/MainPage'
import SelectTicket from './clientsPage/step-select-tickets/SelectTicket'
import QuestionTicket from './clientsPage/step-question-form/QuestionTicket'
import CompleteOrder from './clientsPage/step-complete-order/CompleteOrder'
import Login from './adminPage/Login/Login'
import AddTicket from './adminPage/Add-Ticket-Events/AddTicket'
import ListTicket from './adminPage/List-Ticket/ListTicket'
import ListOrder from './adminPage/List-Order/ListOrder'
 import { Switch,Route } from 'react-router-dom'

function App() {
  return (
  
    <div className="App">
      <Switch>
         <Route exact path="/" component= {MainPage} />
         <Route exact path="/:idticket/step-select-tickets" component= {SelectTicket} />
         <Route exact path="/:idticket/step-question-form" component= {QuestionTicket} />
         <Route exact path="/:idticket/step-complete-order" component= {CompleteOrder} />
         <Route exact path="/admin" component= {Login} />
         <Route exact path="/admin/add-ticket" component= {AddTicket} />
         <Route exact path="/admin/list-ticket" component= {ListTicket} />
         <Route exact path="/admin/list-order" component= {ListOrder} />

      </Switch>
    </div>
  );
}

export default App;
