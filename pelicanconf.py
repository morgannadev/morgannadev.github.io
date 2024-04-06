AUTHOR = 'Morganna'
SITENAME = 'Morganna'
SITEURL = ""

PATH = "content"

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'pt'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# Fica no footer
LINKS = (
    ("You can modify those links in your config file", "#"),
)

# Social widget
# Fica na lateral 
SOCIAL = (
    ("LinkedIn", "https://www.linkedin.com/in/morgannadev/"),
    ("Instagram", "https://www.instagram.com/morgannadev"),
    ("Twitch", "https://www.twitch.tv/morgannadev"),
    ("Mastodon", "https://bolha.us/@morgannadev"),
    ("Bluesky", "https://bsky.app/profile/morgannadev.bsky.social"),
    ("You can modify those links in your config file", "#"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

THEME = "pelican-mediumfox"