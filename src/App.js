import './App.css';
import ChatsList from "./components/ChatsList/ChatsList";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChatMessages from "./components/ChatMessages/ChatMessages";


function App() {
    return (
        <div className="App">
            {/*<Header status={1}/>*/}
            {/*<ChatsList />*/}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ChatsList />}/>
                    <Route path='messages/:chat_id' element={<ChatMessages />}/>
                    <Route path='*' element={<ChatsList />}/>
                </Route>
            </Routes>
        </div>
  );
}

export default App;
