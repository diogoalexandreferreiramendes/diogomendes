import React from 'react';
import axios from 'axios';


const Medium = () => {

    const link = 'https://medium.com/feed/@diogo_mendes' ;
    const parser = new DOMParser()
    const serializer = new XMLSerializer()

    // const getData = async () => {
    //   axios({
    //     method: 'get',
    //     url: link,
    //      data: 'Country=Brasil&City=Belo Horizonte'
    //   })
    //   .then(function({data}){
    //     let parseString = require('xml2js').parseString;
    //     parseString(data, function (err, result) {
    //       console.log(result);
    //     })
    //     console.dir(data)
    //   })
    // }
    // this thind works!!!
    const getTheData = async () => {
      return fetch(link)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => data)
    }
    // const dotheJob = () => {
    //   var parseString = require('xml2js').parseString;
    //   var xml = "<root>Hello xml2js!</root>"
    //   parseString(xml, function (err, result) {
    //     console.dir(result);
    //   })
    // }
    
    const treatData = async () => {
      const valor = await getTheData()
      console.log(valor)
      let title = valor.getElementsByTagName('title')
      let link = valor.getElementsByTagName('link')

      let content = valor.getElementsByTagName('content:encoded')
      let contentExtra = content[0].lastChild.nodeValue;
      let text = contentExtra.split((/<p>/))[1].split((/<\/p>/))[0]

      console.log(title[2].firstChild.nodeValue);
      console.log(link[2].firstChild.nodeValue);
      console.log(text);


      let contentExtra2 = content[0].lastChild.nodeValue;
      let text2 = contentExtra2.split((/<p>/))[1].split((/<\/p>/))[0]

      console.log(title[3].firstChild.nodeValue)
      console.log(link[3].firstChild.nodeValue)
      console.log(text2)

      let contentExtra3 = content[0].lastChild.nodeValue
      const text3 = contentExtra3.split((/<p>/))[1].split((/<\/p>/))[0]

      console.log(title[4].firstChild.nodeValue)
      console.log(link[4].firstChild.nodeValue)
      console.log(text3)
      //console.log(contentExtra.split((/<\/p>/)))
    }

  return (
      <div>
        <h1>Medium</h1>
        <button onClick={() => treatData()}>take</button>
      </div>
  )
};

export default Medium;
