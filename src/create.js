import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Sekiro')
    const [ispending,setisPending] = useState(false)
    const history = useHistory()

    const handleSubmit =(e) => {
        setisPending(true)
        e.preventDefault()
        const blog = {title,body,author}
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            Headers:{'Content-type': 'application/json'},
            body:JSON.stringify(blog)
        })
        .then(() => {
            console.log('blog added')
            setisPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog Title:</label>
                <input 
                type="text"
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>blog body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required>
                </textarea>
                <label>blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Sekiro">Sekiro</option>
                    <option value="Batman">Batman</option>
                </select>
                {ispending &&<button>Adding Blog</button>}
                {!ispending &&<button>Add Blog</button>}
                
            </form>
        </div>
    );
}
 
export default Create;