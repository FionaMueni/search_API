import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
// import List from "./components/List"




const Films = () => {

    const [data, setData] = useState()
    const [newData, setNewData] = useState([])
    const [search, setSearch] = useState("")
    // console.log(data)
    const [selectedCategory, newSelectedCategory] = useState()
    
    
    const category = data && data.map((data) =>data.category)
    const uniqueCategory = new Set(category)
   const newCategory = [...uniqueCategory]

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

useEffect(()=>{
    if (selectedCategory === ""){
        setNewData(data)
    }else {
        const filteredCategory = data && data.filter((movie)=>
        
        {
            return (
                movie.category.includes(selectedCategory) 

            )
            // movie.category === selectedCategory
        })
        setNewData(filteredCategory)
    }

}, [selectedCategory])

    return (
        <div>

        <select onChange={((event)=>newSelectedCategory(event.target.value))}>
            <option value="">All categories</option>

           {newCategory && newCategory.map((item, index)=>{
            return(
                <option value={item} key={index}>{item}</option>
            )
           })}

        </select>
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
