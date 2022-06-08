import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { StoreType } from './redux/state';



export type AppPropsType = {
  store: StoreType
}

// export type AppPropsType = {
//   state: {
//     sidebar: {
//       sideItems: SideItemType[],
//       friends: FriendsType
//     }
//     profilePage: { posts: PostType[]; newPostText:string };
//     dialogsPage: {
//       dialogs: DialogType[];
//       messages: MessagesType;
//     };
//   }
//   addPost: ()=>void
//   updateNewPostText: (newText: string) => void
// }

export type PostType = {
  id: number
  post: string
  likes: number
}

export type DialogType = {
  id: number
  name: string
  avaSourse: string
}

export type MessageType = {
  id: number
  name: string
  authorId: number
}

export type MessagesType = {
  user: string
  message: MessageType[]
}



export type SideItemType = {
  id: number
  title: string
  icon: string
}

export type FriendsType = {
  blockTitle: string,
  friendsList: FriendType[]
}

export type FriendType = {
  id: number
  name: string
  avaSourse: string
}

const App = (props: AppPropsType) => {
  let state = props.store.getState()
  return (
    <div className='app-wriper'>
      <Header />
      <Navbar state={state.sidebar} />
      <Routes>
        <Route path='/' element={<div className='app-wriper-content'> <Outlet /> </div>} />
        <Route path='dialogs/*' element={<Dialogs title='Dialogs' state={state.dialogsPage} />} />
        <Route path='profile' element={<Profile title='Profile' state={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>} />
      </Routes>
    </div>
  )
}



export default App;
