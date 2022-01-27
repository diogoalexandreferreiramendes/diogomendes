import React, { useEffect, useState } from 'react';
import './Medium.css';
import './MediumMobile.css';


const Medium = () => {

    useEffect(() => {
      treatData()
    },[])

    const link = 'https://medium.com/feed/@diogo_mendes' ;

    const [post1Titulo, setPost1Titulo] = useState('');
    const [post2Titulo, setPost2Titulo] = useState('');

    const [post1Link, setPost1Link] = useState('');
    const [post2Link, setPost2Link] = useState('');

    const [post1Content, setPost1Content] = useState('');
    const [post2Content, setPost2Content] = useState('');



    const getTheData = async () => {
      return fetch(link)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => data)
    }
    
    const treatData = async () => {
      const valor = await getTheData()
      let title = valor.getElementsByTagName('title')
      let link = valor.getElementsByTagName('link')

      let content = valor.getElementsByTagName('content:encoded')
      let contentExtra = content[0].lastChild.nodeValue;
      let text = contentExtra.split((/<p>/))[1].split((/<\/p>/))[0]
      setPost1Content(text.substring(0, 200) + '...')

      setPost1Titulo(title[2].firstChild.nodeValue)
      // console.log(title[2].firstChild.nodeValue);
      // console.log(link[2].firstChild.nodeValue);
      setPost1Link(link[2].firstChild.nodeValue)
      // console.log(text)


      let contentExtra2 = content[1].lastChild.nodeValue;
      let text2 = contentExtra2.split((/<p>/))[1].split((/<\/p>/))[0]
      setPost2Content(text2.substring(0, 200) + '...')

      setPost2Titulo(title[3].firstChild.nodeValue)
      // console.log(title[3].firstChild.nodeValue)
      // console.log(link[3].firstChild.nodeValue)
      setPost2Link(link[3].firstChild.nodeValue)
      // console.log(text2)

    }

  return (
      <div>
        <div id="thoughtsandopinions">
            <div className='titleThoughts'>
              <h1 className="titles">thoughts & opinions</h1>
              <a href="https://medium.com/@diogo_mendes" >(see more)</a>
            </div>
            <div className="posts">
              <ul className="ulPostsleft">
                <p><b>{post1Titulo}</b></p>
                <p>
                  {post1Content} 
                </p>
                <a href={post1Link}>
                  <button className="buttonBlog">read more</button>
                </a>  
              </ul>
              <ul className="ulPostsright">
                <p><b>{post2Titulo}</b></p>
                <p>
                  {post2Content}
                </p>
                <a href={post2Link}>
                  <button className="buttonBlog">read more</button>
                </a>  
              </ul>
            </div>
          </div>
      </div>
  )
};

export default Medium;
