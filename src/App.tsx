import './App.css'
import Newspaper from "./components/Newspaper/Newspaper.tsx"
import BlogMessage from "./components/BlogMessage/BlogMessage.tsx"
import {blogs} from './fixtures/blogs.ts'
import {screenshotedNews} from './fixtures/news.ts'

function App() {
    return (
        <div>
            {screenshotedNews.map((news, index) => (
                <Newspaper key={index} {...news}/>
            ))}
            <hr/>
            {blogs.map((blog, index) => (
                <BlogMessage key={index} {...blog}/>
            ))}
        </div>
    )
}

export default App
