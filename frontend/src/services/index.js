import axios from 'axios'

// Use environment variable or default to current origin for production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' // Use relative URLs in production (same origin)
  : 'http://localhost:3000' // Use localhost for development

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiService = {
  // Education API
  async getEducation() {
    try {
      const response = await api.get('/api/education')
      return response.data
    } catch (error) {
      console.error('Error fetching education:', error)
      throw error
    }
  },

  // Skills API
  async getSkills() {
    try {
      const response = await api.get('/api/skills')
      return response.data
    } catch (error) {
      console.error('Error fetching skills:', error)
      throw error
    }
  },

  // Projects API
  async getProjects() {
    try {
      const response = await api.get('/api/projects')
      return response.data
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
  },
}

export default apiService
