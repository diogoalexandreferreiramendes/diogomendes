import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import NavBar from '../../components/NavBar'
import { db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const AddTo = () => {
  const [title, setTitle] = useState()
  const [texto, setTexto] = useState()
  const [password, setPassword] = useState()
  const refLink = useRef()

  const add_To_Single = async (e) => {
    e.preventDefault()
    if(password == 'diogo'){
      try{
        const docRef = await addDoc(collection(db, "to"), {
          texto_to: texto,
          title_to: title,
          image_url: refLink.current,
          timestamp: serverTimestamp()
        })
        alert("O upload foi feito ")
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
        if(url) {
          refLink.current = url
        }
      })
    })   
  }

  return (
    <div>
      <NavBar/>
      <div>
        <h1>Add Thoughts&Opinions</h1>
      </div>
      <div id="idPost_style">
            <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
            <form onSubmit={add_To_Single}>
              <div>
                <label>
                  Img:
                  <input type="file" onChange={handleImageUpload}/>
                  {refLink.current && <img src={refLink.current} width="500" height="500" alt ="Uploaded Image"/>}
                  <br></br>
                </label>
              </div>
                <br/>
                <label>
                Title:
                    <input type="text" name="name" placeholder="your title" onChange={(e)=> setTitle(e.target.value)}/>
                </label>
                <label>
                Text:
                    <textarea type="text" id="textinEmail" name="emailInput" placeholder="your text" onChange={e => setTexto(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default AddTo