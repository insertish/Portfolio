---
slug: pacman-reinstall
published: 2020-10-24T12:41:33.994Z
description: Recovering after a broken system upgrade.
title: Reinstalling Everything Using Pacman
tags: arch linux, pacman, system recovery
cover: /pacman-reinstall.png
---

I've broken my Arch installation more times than I can remember, usually interrupting pacman on accident. Recently I had some more serious corruption occur so the only real choice I had was to reinstall everything since I had at least 30+ packages break and I didn't have time to figure out what was going on exactly.

Below is the script I used to reinstall everything.

```bash
#!/bin/bash
pacman -Sy
packages=($(comm -12 <(pacman -Slq|sort -u) <(pacman -Qq|sort -u)))
pacman -S --overwrite "*" $(echo ${packages[@]} | tr '\n' ' ')
```

#### Explanation

First of all, we need to update the package database so that we stay up to date. You **should** do this in order to avoid 404 errors from mirrors and to stay up to date on the latest packages.

```bash
pacman -Sy
```

Next, we take all of the installed packages and compare them to pacman's database, this is to filter out any packages which you may have installed from AUR (i.e. using paru) or other places which you can't reinstall using pacman. You could modify this script to instead grab all installed packages and feed them into your AUR helper, but I would rather get into my system as soon as possible and only then update my AUR packages.

```bash
packages=($(comm -12 <(pacman -Slq|sort -u) <(pacman -Qq|sort -u)))
```

The previous instruction outputs all the packages separated by a newline, so we need to convert this newline to a space and then we can feed it into pacman. We also specify `--overwrite "*"` which tells pacman to overwrite any existing files (which would probably be present if you interrupted pacman previously) and would cause the installation to fail.

```bash
pacman -S --overwrite "*" $(echo ${packages[@]} | tr '\n' ' ')
```

And that's pretty much it, I wrote this just to have a reference for the future but it might help someone else.
