import './App.css'
import TelegramMessage from "./components/TelegramMessage/TelegramMessage.tsx"
import BlogMessage from "./components/BlogMessage/BlogMessage.tsx"
import {blogs} from './fixtures/blogs.ts'
import {messages} from './fixtures/messages.ts'

function App() {
    return (
        <div>
            <div className="messagingSpace">
                {messages.map((message, index) => (
                    <TelegramMessage key={index} {...message} />
                ))}
            </div>
            <hr/>
                {blogs.map((blog, index) => (
                    <BlogMessage key={index} {...blog}/>
                ))}
        </div>
    )
}

export default App
