---
slug: insight
started: 2019-10-05T11:59:59Z
updated: 2020-03-27T14:24:26Z
name: INSIGHT Library
description: Javascript library for interacting with TASC Software's INSIGHT platform.
tags: jest, school
languages: typescript
type: library
repository: https://gitlab.insrt.uk/insert/insight
library: https://www.npmjs.com/package/tasc-insight
---

This is a library I made for interacting with our school's homework / timetable system, INSIGHT, I believe this is the second or third iteration of the software. I was motivated to rewrite it since I needed a way to interact with it again for use with the buzzer bot.

## Background (from [README](https://gitlab.insrt.uk/insert/insight/-/blob/master/README.md))

- This was initially started because Insight looks like utter garbage, and I can say for certain most of the developers at TASC really threw Insight together on their first try and didn't even bother with it.
- The version of Insight in production, more specifically the one my school is running:
  - has unminified code hosted on their servers
  - has inline css and js in pretty much all pages
  - uses ASP.NET
  - looks plain ugly, no effort was made to make any of it look good (uses bootstrap too)
    - this would be fine for a developer site, but this is user facing
  - takes forever to load most pages, see test results
  - sends HTML code inside of a JSON object to display on timetable
  - has inconsistent dates everywhere, i.e. `5|6|2000` for fetching timetable week
