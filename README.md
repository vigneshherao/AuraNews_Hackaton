📝 Category: Blogs & Content Platforms
Create a news website with featured stories and trending topics.

AuraNews is a modern news application that fetches real-time news data from NewsAPI.org and displays it in a user-friendly interface. The application is designed to showcase top headlines and news articles while allowing users to check the topics.

Features

Fetch real-time news from NewsAPI.org(Restricted from thier side removed api call ) now using dummy data

Display dummy news data

Responsive and intuitive UI

Categorized news sections



Tech Stack

Frontend: React.js, Tailwind CSS

API: NewsAPI.org for live news fetching (removed bec of restiction )


Clone the repository:

git clone https://github.com/vigneshherao/AuraNews_Hackaton.git
cd auraNews

Install dependencies:

npm install

npm run dev


https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY

Dummy Data Structure:

{
  "status": "ok",
  "totalResults": 3,
  "articles": [
    {
      "source": { "id": null, "name": "Example News" },
      "author": "John Doe",
      "title": "Breaking News Title",
      "description": "Short description of the news article.",
      "url": "https://example.com/news1",
      "urlToImage": "https://example.com/image1.jpg",
      "publishedAt": "2025-03-29T12:00:00Z",
      "content": "Full news content here."
    }
  ]
}

Flowchart

[ Start ]
    |
    v
[ Load App ]
    |
    v
[ Check API Key ]
    |
    v
[ Fetch News from API ]
    |       |
    |       v
    |       [ API Restricted or Error? ] -- Yes --> [ Load Dummy Data ]
    |       |
    v       |
[ Display News ] <-- No --|
    |
    v
[ End ]
