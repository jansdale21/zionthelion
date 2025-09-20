import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('App Component', () => {
  it('renders invitation card when no previous acceptance', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(<App />)
    
    expect(screen.getByText("You're Invited!")).toBeInTheDocument()
    expect(screen.getByText("Zion's 1st Birthday")).toBeInTheDocument()
  })

  it('renders main app when invitation is accepted', () => {
    localStorageMock.getItem.mockReturnValue('true')
    
    render(<App />)
    
    expect(screen.getByText('#ZionTheLion')).toBeInTheDocument()
  })

  it('shows decline message when invitation is declined', () => {
    localStorageMock.getItem.mockReturnValue('false')
    
    render(<App />)
    
    expect(screen.getByText("We'll Miss You!")).toBeInTheDocument()
  })
})
