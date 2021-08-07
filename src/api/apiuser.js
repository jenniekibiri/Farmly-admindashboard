export const  list = () => {
    return  fetch(`${process.env.REACT_APP_BACKENDAPI}/api/users`, {
          Method: "GET",
        })
  } 
  export const  getUserById = (userId) => {

    return  fetch(` ${process.env.REACT_APP_BACKENDAPI}/api/user/${userId}`, {
          Method: "GET",
        })
  }
  export const  deleteCategoryAPI = async (userId,token,categoryId) => {

    
    return  fetch(` ${process.env.REACT_APP_BACKENDAPI}/api/category/${categoryId}/${userId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
        }
      }).then(response => {
        return response.json()  
        
      }).catch(err => console.log(err))
        
  }
 
 
  