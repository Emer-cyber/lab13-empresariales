const API_BASE_URL = 'http://127.0.0.1:8000/api'

export async function getCategorias() {
  const response = await fetch(`${API_BASE_URL}/categorias/`, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudieron cargar las categorias`)
  }

  return await response.json()
}

export async function getProductos(categoria = null) {
  let url = `${API_BASE_URL}/productos/`
  
  if (categoria && categoria !== 'Todos' && categoria !== 'Ver Todos') {
    url += `?categoria=${encodeURIComponent(categoria)}`
  }

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Error ${response.status}: No se pudieron cargar los productos`)
  }

  return await response.json()
}
