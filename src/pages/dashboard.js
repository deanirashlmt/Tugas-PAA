import React ,{ useState , useEffect } from 'react';


const insertToDO = async (data) => {

      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };

  const response = await fetch("http://localhost:3000/api/crud", options);
  const responseJson = await response.json();
};


const deleteToDO = async ( id ) => {
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
      'X-Auth-Token': '12345'
    },
    body: JSON.stringify( id )
  };

  const response = await fetch("http://localhost:3000/api/delete", options);
  const responseJson = await response.json();
}

const update = async ( data ) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
    'X-Auth-Token': '12345'
  },
  body: JSON.stringify( data )
};

const response = await fetch("http://localhost:3000/api/crud", options);
const responseJson = await response.json();
}

const FormToDo = () => {

  return(
    <>
      <form className='w-[400px] h-[400px] m-3 bg-white-800 text-gray-50 flex flex-col justify-center items-center gap-[20px] '>
        <h2 className='text-6xl text-center' > Bajoe.id  </h2>
          <div className='flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-[10px]  w-max m-2 '>
                <input id='id'  type='hidden'  ></input>
                <input id='todoV' className='px-2 py-2 w-[300px]  text-black'
                type= 'text' placeholder='Masukkan nama baju anda' ></input>
                <input id='doneV' className='px-2 py-2 w-[300px]  text-black' type='text' 
                placeholder='Masukkan merk' ></input>
            </div>

              <button className='bg-sky-500 text-white px-3 py-1 w-[100px] self-center' 
              type='button' onClick={(event)=>{
                event.preventDefault();
                const todoResult = document.getElementById('todoV').value;
                const doneResult = document.getElementById('doneV').value;

                const todoTotal = {
                    name : todoResult,
                    merk : doneResult
                }

                insertToDO(todoTotal)

              }} >Submit</button>
                <button className='bg-sky-500 text-white px-3 py-1 w-[100px] self-center' 
              type='button' onClick={(event)=>{
                event.preventDefault();
                const id = document.getElementById('id').value;
                const todoResult = document.getElementById('todoV').value;
                const doneResult = document.getElementById('doneV').value;

                const data = {
                    id : parseInt(id),
                    name : todoResult,
                    merk : doneResult
                }

                update(data)

              }} >Edit</button>
          </div>
      </form>
    </>
  );
};



const GetToDo = () => {

  const [  allToDo, setToDo  ] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/api/crud")
    .then( response => {
      return response.json(); 
    } )
    .then( data => {
      setToDo(data)
      console.log(allToDo)
    });
  });

  return(
    <>
      <div className='w-[400px] h-max bg-white-800 flex flex-col  justify-center items-center'>
      <h2 className='text-white'>List Baju Anda</h2>
        {allToDo.map((item)=>{
          return(
              <div key={item.id} className='bg-white my-4'>
                <h2  >{ item.name }</h2>
                <p>{item.merk}</p>
                <div className='flex gap-[100px]' >
                 <button  onClick={()=>{

                  const ID =  {
                    id : item.id
                  }

                  deleteToDO(ID)
                }}  className=' bg-red-400 '>del</button>
                <button  onClick={()=>{
                    document.getElementById('id').value = item.id
                   document.getElementById('todoV').value = item.name
                   document.getElementById('doneV').value = item.merk

                }}  className=' bg-sky-400 '>edit</button>
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
};

const MyToDO = () => {
  return(
    <>
      <div className='flex flex-col items-center' >
        <FormToDo/>
        <GetToDo/>
      </div>
    </>
  )
};

export default function Home() {
  return (<MyToDO/>)
}