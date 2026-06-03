/**
 * Update githubUsername and linkedinSlug before deploying.
 * Set NEXT_PUBLIC_GITHUB_USERNAME in .env.local to override GitHub API stats.
 */
export const siteConfig = {
  name: "Jonas Costa de Lima",
  firstName: "Jonas",
  initials: "JL",
  role: "Senior Software Engineer | AI Solutions",
  occupation: "Senior Software Engineer | AI Solutions",
  email: "jonaslima2026j@gmail.com",
  phone: "+55 (61) 99270-9555",
  location: "Uruaçu, Goiás, Brazil",
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "humordev",
  linkedinSlug: "jonas-costa-de-lima",
} as const;

export const githubUrl = `https://github.com/${siteConfig.githubUsername}`;
export const linkedinUrl = `https://www.linkedin.com/in/${siteConfig.linkedinSlug}`;
