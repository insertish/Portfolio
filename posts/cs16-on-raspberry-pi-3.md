---
slug: cs16-on-raspberry-pi-3
published: 2018-12-15T21:28:54Z
description: Running a CS server on a budget.
title: Counter-Strike 1.6 Server on a Raspberry Pi
tags: raspberry pi, cs 1.6, steamcmd, hlds server
cover: /cs16.jpg
---

**2020 Update**: Originally this post pointed you to Eltechs' website to install Exagear but I've since replaced it with my own guide to install it. box86 is a great alternative but I don't think it is usable for things like this yet and Exagear is still perfect for this.

Before you get started, [install Exagear using the instructions found here](/post/exagear-install).

#### Preparing the environment

To get started, enter the 32-bit environment and install required packages:

```bash
exagear
sudo apt-get update
sudo apt-get install libgcc1 curl
```

#### Downloading and installing SteamCMD

Once you have all the packages needed, move to a new directory and install steamcmd:

```bash
mkdir steamcmd
cd steamcmd
curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -
```

Then create an update script for CS 1.6:

> Change `/home/pi/cs16` to where you want to install the server.

```bash
echo "login anonymous
force_install_dir /home/pi/cs16
app_set_config 90 mod cstrike
app_update 90 validate
app_update 70 validate
app_update 10 validate
app_update 90 validate
quit" > update_cs16.txt
```

Now to update your server run:

```bash
./steamcmd.sh +runscript update_cs16.txt
```

#### Running the server

Move to the directory and create a new script:

> Change the arguments as you wish.

```bash
cd /home/pi/cs16
echo "./hlds_run -game cstrike -autoupdate -pingboost 2 -port 27016 +maxplayers 24 +map de_dust2" > start.sh
chmod +x start.sh
```

Then you can run your server like so:

```bash
./start.sh
```
