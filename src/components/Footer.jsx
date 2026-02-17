const Footer = ({setIndex,index,setUserData,idxNum}) => {
  return (
 <footer className=' lg:absolute lg:bottom-0 text-center w-full align-center justify-center gap-3 flex p-2 bg-black ' >
      <button onClick={()=>{setIndex(index-1),setUserData([]) }}  className='bg-amber-500 font-bold p-1 rounded cursor-pointer' >Prev</button>
       {idxNum.map(function(elem,idx){
          if (elem<index-2 || elem>index+2) {
            return null
          }
        if (elem===index) {
          return <h1 key={idx} onClick={()=>{setIndex(elem),setUserData([])}} className='text-amber-500 mt-2 cursor-pointer border-1 border-amber-500 px-2'> {elem} </h1>
        }else{
          return <h1 key={idx} onClick={()=>{setIndex(elem),setUserData([])}} className='text-white mt-2 cursor-pointer border-1 px-2'> {elem} </h1>
        }
       })}
      <button  onClick={()=>{setIndex(index+1),setUserData([])  }} className='bg-amber-500 font-bold  p-1 rounded cursor-pointer' >Next</button>
    </footer>  )
}

export default Footer
