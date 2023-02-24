import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import NavBar from '../../components/NavBar'
import './Addposts.css'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';

const Addposts = () => {
    const [title, setTitle] = useState()
    const [texto, setTexto] = useState()
    const refLink = useRef()
    const [start, setStart] = useState()
    const [final, setFinal] = useState()
    const [password, setPassword] = useState()
    const [nowwork, setNowwork] = useState(false)

    const add_Project = async (e) => {
        e.preventDefault()
        if(password == 'diogo'){
            try{
            const docRef = await addDoc(collection(db, "projects"),{
                texto_project: texto,
                title_project: title,
                data_inicio: start,
                data_fim: final,
                image_url: refLink.current,
                timestamp: serverTimestamp(),
                now: nowwork
            })
            alert("O upload foi feito")
            }catch(e){
                console.error("Error adding document: ", e)
            }
        }else{
            alert('try again')
        }
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0]

        const upload = ref(storage, `images/${file.name}`)

        uploadBytes(upload, file).then((snapshot) => {
            getDownloadURL(upload)
            .then((url) => {
                if(url){
                    refLink.current = url
                }
            })
        })
    }

  return (
    <div>
        <NavBar />
        <div>
            <h1>Add Project</h1>
        </div>
        <div id="idPost_style">
            <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
            <form onSubmit={add_Project}>
                <br></br>
                <div>
                    <label>
                    Img:
                    <input type="file" onChange={handleImageUpload} pattern="[0-9]{2}-[0-9]{4}"/>
                    {refLink.current && <img src={refLink.current} width="500" height="500" alt ="Uploaded Image"/>}
                    <br></br>
                    </label>
                </div>
                <label>
                Title:
                    <input type="text" name="name" onChange={(e)=> setTitle(e.target.value)}/>
                </label>
                <br/>
                <label>
                Beginning:
                <input type="month" name="name" onChange={(e) => setStart(e.target.value)}/>
                </label>
                <br/>
                <label>
                End:
                <input type="month" name="name" onChange={(e) => setFinal(e.target.value)}/>
                </label>
                <br></br>
                <label>
                Ainda a trabalhar - check yes
                <input type="checkbox" name="name" checked={nowwork} onChange={() => setNowwork(!nowwork)}/>
                </label>
                <div>
                <label>
                <br/>
                Text:
                    <textarea type="text" id="textinEmail" name="emailInput" placeholder="your text" onChange={e => setTexto(e.target.value)}/>
                </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Addposts