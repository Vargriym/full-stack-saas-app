import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function LoginForm({ setSubmitted }) {
  const supabaseClient = useSupabaseClient()
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)



  async function onSubmit(event) {
    setLoading(true)
    event.preventDefault()
    const email = event.target.elements.email.value;
     const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: window.location.origin,
      }
    })
    if (error) {
      setError(error.message)
      setLoading(false)
      console.log(error)
    } else {
      setError('')
      setLoading(false)
      setSubmitted(email)
    }
  }

  return (
    <form onSubmit={onSubmit} className="content-grid home-hero">
      {error && (
        <div className="danger" role="alert">
          {error}
        </div>
      )}
      <h1>Welcome back</h1>
      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" autoComplete="email" />
      </div>
      <button disabled={isLoading} type="submit" className="large-button">
        <div className="large-button-text">{isLoading ? "Logging in..." : "Log in"}</div>
      </button>
    </form>
  )
}
