import { supabase } from './supabase'
import { env } from './env'

// Fetch from Strapi with error handling
export async function fetchFromStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${env.strapi.url}/api${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.strapi.token}`,
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}`)
  }

  return response.json()
}

// Example: Get content from Strapi
export async function getContent(contentType: string) {
  return fetchFromStrapi(`/${contentType}`)
}

// Example: Authenticated Supabase query
export async function getUserData(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}
