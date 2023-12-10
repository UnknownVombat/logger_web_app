import './App.css';
import ChatsList from "./components/ChatsList/ChatsList";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChatMessages from "./components/ChatMessages/ChatMessages";
import {useEffect} from "react";
import AuthForm from "./components/AuthPage/AuthForm";


function App() {
    const wa = window.Telegram.WebApp;
    useEffect(() => {
        wa.ready()
    }, [wa]);
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ChatsList />}/>
                    <Route path='messages/:chat_id/:name' element={<ChatMessages />}/>
                    <Route path='*' element={<ChatsList />}/>
                </Route>
                <Route path='auth' element={<AuthForm />}/>
            </Routes>
        </div>
  );
}

export default App;
