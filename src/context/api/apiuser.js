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
 
