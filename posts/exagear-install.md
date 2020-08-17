---
slug: exagear-install
title: Installing Exagear In 2020 (Raspberry Pi)
tags: exagear raspberry pi
overline: Eltechs may be gone, but Exagear lives on.
published: 20th June 2020
hero-wide: /exagear-install.jpg
---
## Installing Exagear in 2020 (for RPi)

Exagear is gone and so is Eltechs, suprisingly enough their activation server seems to be still working (?), although my supposed "multi-device license" only worked on my Pi and not someone's else, keeping in mind that this was a fresh installation of Raspbian I can only assume their activation server is online and that I was sold something else than stated.

When I first bought Exagear, like an idiot, I bought the enterprise version for the RPi 3 (costing £32!), so I don't feel bad at all sharing anything below as my license was clearly does not work anymore or I was sold the wrong license. And the company is gone anyways...

### Downloading Exagear

I currently mirror old copies of Exagear from which you can find the version you need.

You can find [all the packages here](https://dl.insrt.uk/mirror/exagear).

Choose an Exagear package:
- Raspberry Pi 1: [exagear-legacy_3428-1_armhf.deb](https://dl.insrt.uk/mirror/exagear/exagear-legacy_3428-1_armhf.deb)
- Raspberry Pi 2: [exagear_3428-1_armhf.deb](https://dl.insrt.uk/mirror/exagear/exagear_3428-1_armhf.deb)
- Raspberry Pi 3: [exagear_3428-1_armhf.deb](https://dl.insrt.uk/mirror/exagear/exagear_3428-1_armhf.deb)
- For newer models, either use the package above or use the 64-bit package.
  - For arm64: [exagear_3428-1_arm64.deb](https://dl.insrt.uk/mirror/exagear/exagear_3428-1_arm64.deb)

Choose a `dsound` package:
- For armhf (any device): [exagear-dsound-server_010_armhf.deb](https://dl.insrt.uk/mirror/exagear/exagear-dsound-server_010_armhf.deb)
- For arm64 (newer devices, i.e. ARM v8): [exagear-dsound-server_010_arm64.deb](https://dl.insrt.uk/mirror/exagear/exagear-dsound-server_010_arm64.deb)

Choose a guest image:
- Debian 8: [exagear-guest-debian-8_3428_all.deb](https://dl.insrt.uk/mirror/exagear/exagear-guest-debian-8_3428_all.deb)
- Debian 9 (recommended for Raspbian): [exagear-guest-debian-8_3428_all.deb](https://dl.insrt.uk/mirror/exagear/exagear-guest-debian-8_3428_all.deb)
- Ubuntu 16.04: [exagear-guest-ubuntu-1604_3428_all.deb](https://dl.insrt.uk/mirror/exagear/exagear-guest-ubuntu-1604_3428_all.deb)
- Ubuntu 18.04: [exagear-guest-ubuntu-1804_3428_all.deb](https://dl.insrt.uk/mirror/exagear/exagear-guest-ubuntu-1804_3428_all.deb)

### Installing Exagear

Before going forwards, we need to install prerequisites.

```bash
sudo apt-get update
sudo apt-get install -y bash coreutils findutils curl binfmt-support cron
```

Make sure to uninstall any old versions of Exagear (this will wipe your images).

```bash
sudo apt-get remove exagear
```

Create a new directory and enter it:

```bash
mkdir ~/exagear
cd ~/exagear
```

Download the packages to this folder using `wget`, i.e. `wget https://dl.insrt.uk/path/to/file`.

Hence, install all the packages:

```bash
sudo dpkg -i exagear*3428*.deb
sudo dpkg -i exagear-dsound*.deb
sudo dpkg -i exagear-guest*.deb
```

### Patching Exagear

This method was provided by [toasteh](https://pyra-handheld.com/boards/members/toasteh.86768/) on the pyra-handheld forums.

To quickly patch your current installation, run:

```bash
curl https://dl.insrt.uk/mirror/exagear/patch.sh | sudo bash
```

Or alternatively, [view the script here](https://dl.insrt.uk/mirror/exagear/patch.sh).

### Final Notes

Once installed you can run `exagear` and you're done! Run `arch` if you don't believe me.

Be sure to update your new environment:

```bash
sudo apt-get update && sudo apt-get upgrade -y
```

Lastly, if you had any issues don't hesistate to leave me a message.

Thanks for reading.

#### Further Ideas

Now that you have your new x86 environment, you could:
- Play some old game titles on your Pi.
- Run a [CS 1.6 server](https://www.youtube.com/watch?v=McrDlAk6ifQ) from your Pi.
