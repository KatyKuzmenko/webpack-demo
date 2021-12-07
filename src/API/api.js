const BASE_URL = 'http://localhost:3000'

const request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
  .then(response => {
    if (!response.ok) {
      throw `${response.status} - ${response.statusText}`
    }

    return response.json()
  })
}

const remove = (url) => {
  return request(url, {
    method: 'DELETE',
  })
}

const post = (url, data) => {
  return request(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data),
  })
}

const patch = (url, data) => {
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data),
  })
}

export const createTodo = (title) => {
  return post('/todos', {
    title
  })
}


export const updateTodo = (todoId, title) => {
  return patch(`/todos/${todoId}`, { title })
}
 
export const updateStatus = (todoId, iscompleted) => {
  return patch(`/todos/${todoId}`, { iscompleted })
}

export const toggleAll = (iscompleted) => {
  return patch('/todos', { iscompleted })
}

export const deleteTodo = (todoId) => {
  return remove(`/todos/${todoId}`)
}

export const getTodos = () => request('/todos')

export const getTodo = (todoId) => request(`/todos/${todoId}`)

// updateTodo(7, 'qwwerere')
//   .then(todos => {
//     console.log('Success:', todos)
//   })
//   .catch(error => {
//     console.warn(error)
//   })

// createTodo('fetchapi')
//   .then(todos => {
//     console.log('Success:', todos)
//   })
//   .catch(error => {
//     console.warn(error)
//   })

// getTodo(3)
//   .then(todos => {
//     console.log('Success:', todos)
//   })
//   .catch(error => {
//     console.warn(error)
//   })

// deleteTodo(3)
//   .then(todos => {
//     console.log('Success:', todos)
//   })
//   .catch(error => {
//     console.warn(error)
//   })
