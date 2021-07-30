export const  list = () => {
    return  fetch(`http://localhost:5000/api/users`, {
          Method: "GET",
        })
  }