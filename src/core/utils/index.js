const production = process.env.NODE_ENV === "production"

export const SITE_URL = production ? "prod-url" : "https://full-stack-saas-app.vercel.app" 
