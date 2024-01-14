const production = process.env.NODE_ENV === "production"

export const SITE_URL = production ? "https://full-stack-saas-app.vercel.app" : "http://localhost:3000" 
