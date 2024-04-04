
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {Menu} from './pages/Menu'
import {NavBar} from './pages/navBar'




// function App() {
//     const [todoList, setTodoList] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [complete, setcomplete] = useState(false)

//     const getTask = (e) => {
//         setNewTask(e.target.value)
//     }

//     const getTodoList = () => {
//         const task = {
//             id: Symbol(1),
//             taskName: newTask,
//             complete: complete
//         }
//         setTodoList([...todoList, task])
//         document.querySelector('.addTaskInput').value = ''
//     }

//     const deleteTask = (taskId) => {
//         setTodoList(todoList.filter(task => task.id !== taskId))
//     }

//     const isComplete = (taskId) => {
//         setcomplete(!complete)
//         setTodoList(todoList.map(task => task.id === taskId ? {...task, complete} : task))
//     }

//     return <div className='App'>
//         <div className='addTask'>
//             <input className='addTaskInput' onChange={getTask}></input>
//             <button onClick={getTodoList}>Add Task</button>
//         </div>
//         <div className='listContainer'>
//             {todoList.map(task => {
//             return <Task taskName={task.taskName} 
//                 id={task.id}
//                 complete={task.complete}
//                 deleteTask={deleteTask}
//                 isComplete={isComplete}
//             />
//             })}
//         </div>
//     </div>
// }


// function App() {
//     const [dogPhoto, setDogPhoto] = useState('');
//     const [imageSize, setImageSize] = useState(false)

//     const fetchtDogPhotos = () => {
//         Axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
//             setDogPhoto(res.data.message)
//             setImageSize(true)
//         })
//     }

//     const setFalse = () => {
//         setImageSize(false)
//     }

//     return (
//         <div className='App listContainer'>
//             <h1> Dog Photos</h1>
//             <button onClick={fetchtDogPhotos}>Get Dog Photo</button> 

//             {imageSize && <Image src={dogPhoto} setFalse={setFalse}/>}            
//         </div>
//     )
// }


function App() {
    return <div className='App'>
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
}

export default App;

