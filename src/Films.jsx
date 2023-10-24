import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
// import List from "./components/List"




const Films = () => {

    const [data, setData] = useState()
    const [newData, setNewData] = useState([])
    const [search, setSearch] = useState("")
    // console.log(data)
    

    useEffect(()=>{
        fetch("http://localhost:3000/films").then((response)=>{
            if(!response.ok){
                throw new Error(console.log("Error"))
            }
            return response.json()
        }).then((data)=>{
            setData(data)
            setNewData(data)
        })
    },[])

useEffect(()=>{
    if (search !== "") {
        const filteredData = data && data.filter((item)=>{
            return (
                item.title.toLowerCase().includes(search.toLowerCase()) 

            )
        })
        setNewData(filteredData)
    }else {
        return(
            setNewData(data)
        )
    }
    
}, [search])


    return (
        <div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px'
            }}>
            <input type="text" placeholder='search' onChange={(event)=>setSearch(event.target.value)} style={{width: "150px", height: "20px"}}/>
            {newData && newData.map((item, index)=>{
                // console.log(item)
                return (
                    <Movie list={item} key={index}/>
               
                )
                
            })}
            </div>
           
        </div>
    );
}

export default Films;
