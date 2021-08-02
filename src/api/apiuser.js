export const  list = () => {
    return  fetch(`http://localhost:5000/api/users`, {
          Method: "GET",
        })
  }
  export const  getUserById = (userId) => {
    return  fetch(`http://localhost:5000/api/user/${userId}`, {
          Method: "GET",
        })
  }
  export const  deleteCategoryAPI = async (userId,token,categoryId) => {

    
    return  fetch(`http://localhost:5000/api/category/${categoryId}/${userId}`, {
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
 
 
  