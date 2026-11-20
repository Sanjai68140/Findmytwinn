# FindMyTwinn 🎂

Interactive birthday twin finder for **r/findmytwinn**, designed for a Reddit Devvit Web post.

## Status

**UI prototype added; not yet a deployable Devvit app.** The React component is at `src/client/BirthdayFinder.tsx` and its CSS is at `src/client/birthday-finder.css`.

The UI supports 366 possible dates, including February 29, and reveals the selected birthday. It opens a Reddit birthday thread only if a real permalink has been supplied via the `threadUrls` prop, keyed like `11-22`. No parent comments or links have been created yet.

## Next steps

1. Open this repo in GitHub Codespaces on iPhone.
2. Initialize the official Reddit React Devvit template following https://developers.reddit.com/docs/quickstart (Node.js 24.18+).
3. Integrate the UI into the template's React entrypoint.
4. Run `npm run dev` for Devvit playtesting.
5. Implement Reddit API creation of 366 parent comments under a designated post, respecting rate limits and permissions. Record real comment IDs in a Devvit-side index; Reddit comments remain the public discussion record.
6. Test mobile thread navigation, launch for review, and install in r/findmytwinn.

Do not collect birth years or post on behalf of users without explicit permission. Crossposts to other communities do not guarantee interactive functionality there.
