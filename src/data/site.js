 export default {
	github: {
		repository: "https://github.com/ecarlisle/eleventy3.ericcarlisle.com",
		branch: "/blob/main/",
	},
  url: process.env.ENVIRONMENT === "production" ? "https//www.ericcarlisle.com" : "http://localhost:3000",
  title: "Eric Carlisle : UI, UX Engineer",
  name: "Eric Carlisle : UI Developer, UX Strategist",
  title: "Eric Carlisle : UI Developer, UX Strategist",
  image: "/img/eric-carlisle-800x800.png",
  description: "Eric Carlisle i a....",
  publisher: "Eric Carlisle",
  lang: "en",
  locale: "en_US",
	environment: process.env.ENVIRONMENT === "production" ? "production" : "development",
	social: [
		{
			name: "GitHub",
			url: "https://github.com/ecarlisle",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/ericcarlisle",
		},
		{
			name: "Mastodon",
			url: "https://fosstodon.org/@ericcarlisle",
		},
		{
			name: "Twitter",
			url: "https://www.twitter.com/ecarlisle",
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/ericcarlisle/",
		},
	],
};
