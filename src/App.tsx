import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';

type Khui = string

export type PostType = {
    id: number,
    post: string,
    likes: number
}

export type DialogType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  name: string
}

export type AppPropsType = {
  state: {
    profilePage: { posts: PostType[] };
    dialogsPage: {
      dialogs: DialogType[];
      messages: MessageType[];
    };
  }
}


const App = (props: AppPropsType) => {

  return (
    <div className='app-wriper'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={props.state.dialogsPage} />} />
        <Route path='profile' element={<Profile title='Profile' state={props.state.profilePage} />} />
      </Routes>
    </div>
  )
}



export default App;
