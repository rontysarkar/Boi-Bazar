export const  getReadInfo = () =>{
   const savedData = JSON.parse(localStorage.getItem('read')) || [];
   return savedData;
}

