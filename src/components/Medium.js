import React from 'react';
import axios from 'axios';


const Medium = () => {

    const link = 'https://medium.com/feed/@diogo_mendes' ;
    const parser = new DOMParser()
    const serializer = new XMLSerializer()

    const getData = async () => {
      axios({
        method: 'get',
        url: link,
         data: 'Country=Brasil&City=Belo Horizonte'
      })
      .then(function({data}){
        let parseString = require('xml2js').parseString;
        parseString(data, function (err, result) {
          console.log(result);
        })
        console.dir(data)
      })
    }
    // this thind works!!!
    const getTheData = async () => {
      fetch(link)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => console.log(data))
    }
    const dotheJob = () => {
      var parseString = require('xml2js').parseString;
      var xml = "<root>Hello xml2js!</root>"
      parseString(xml, function (err, result) {
        console.dir(result);
      })
    }

  return (
      <div>
        <h1>Medium</h1>
        <button onClick={() => getTheData()}>take</button>
      </div>
  )
};

export default Medium;
