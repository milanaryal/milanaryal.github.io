---
redirect_from: "/dell-inspiron-7370-laptop-configurations-for-windows-11/"
title: "Dell Inspiron 7370 Laptop configuration for Windows 11"
date: 2021-06-25 11:00:00 +05:45
excerpt: "Learn configuring the UEFI (BIOS) of Dell Inspiron 13 7000 7370 Laptop for Microsoft Windows 11 operating system."
---

Last night (June 24, 2021 8:45-9:45PM GMT+05:45), Microsoft unveiled next generation Windows 11 with following minimum system requirements.

| Specs               | Windows 11 minimum system requirements                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| Processor           | 1 gigahertz (GHz) or faster with 2 or more cores on a compatible 64-bit processor or System on a Chip (SoC) |
| Memory              | 4 GB RAM                                                                                                    |
| Storage             | 64 GB or larger storage device                                                                              |
| System firmware     | UEFI, Secure Boot capable                                                                                   |
| TPM                 | Trusted Platform Module (TPM) version 2.0                                                                   |
| Graphics card       | DirectX 12 compatible graphics / WDDM 2.x                                                                   |
| Display             | >9" with HD Resolution (720p)                                                                               |
| Internet connection | Microsoft account and internet connectivity required for setup for Windows 11 Home                          |

Certain features require specific hardware, see detailed [system requirements](https://www.microsoft.com/windows/windows-11-specifications){:rel="nofollow"}.

> Many UEFI (Unified Extensible Firmware Interface) platforms still enable legacy BIOS compatibility using CSM (Compatibility Support Module). Intel had planned to deprecate legacy compatibility by 2020, and is working with partners on a smooth industry transition.

The new platform (with the Windows 11 UEFI configuration), will be unable to run 32-bit operating systems, unable to use related software (at least natively), and unable to use older hardware, such as RAID HBAs (and therefore older hard drives that are connected to those HBAs), network cards, and even graphics cards that lack UEFI-compatible vBIOS (launched before 2012 – 2013).

Those who need older programs will still be able to run them in virtualization mode, but outdated hardware will have to be retired or remain on older platforms.

### Configure Dell Inspiron 7370 Laptop for Windows 11

> Original Equipment Manufacturer (OEM): [Dell Inspiron 13 7000 7370 Laptop](https://www.amazon.com/Dell-Inspiron-7000-7370-Laptop/dp/B0764N2QL3){:rel="nofollow"} -- (13.3" Touchscreen IPS FHD (1920x1080), 8th Gen Intel Quad-Core i5-8250U/i7-8550U, 256/512GB SSD, 8/16GB DDR4, Backlit Keyboard, ..[see detailed specs](https://www.cnet.com/products/dell-inspiron-7370-13-3-core-i7-8550u-16-gb-ram-512-gb-ssd/){:rel="nofollow"}) is compatible for Windows 11 or, if your device is already running Windows 10, you can use the [PC Health Check app](https://www.microsoft.com/windows/windows-11#pchealthcheck){:rel="nofollow"} to assess compatibility.

#### Settings

Restart laptop and press/tap the "F2" key until UEFI (BIOS) setup will appear. Then setup following UEFI (BIOS) configuration:

#### General

- Boot Sequence > Enable UEFI
- Advance Boot Options > Disable Legacy Option ROMs

#### Secure Boot

- Enable

#### Security

- Enable PTT Security

> **[Note](https://stackoverflow.com/questions/64075223/are-intels-ptt-and-tpm-equivalent){:rel="nofollow"}**: The Intel PTT (Platform Trust Technology) fully supports all Microsoft's requirements for firmware TPM (Trusted Platform Module) version 2.0 specification.

On Windows, you can check TPM by running `tpm.msc` command prompt.

With the above setup, your PC (Dell Inspiron 7370) meets the minimum system requirements for installing Windows 11.

#### [Summary](https://youtu.be/n6unGwtpbEc?t=110){:rel="nofollow"} of UEFI (BIOS) config for Windows 11

- Intel® Core™ CPU: 8th Gen or Greater
- Boot Mode: UEFI
- Secure Boot: Enabled
- Legacy ROM: Disabled
- TPM 2.0 / fTPM (AMD) / PTT (Intel): Enabled
- Boot Sequence: Set the Hard/SSD Drive (with the Operating System installed) as the First Boot Device
- SATA Operations: AHCI (RAID ON if system has a RAID CARD or if RAID is configured on the system)

> **Tip**: While starting/restarting your PC press/tap the "F2" key for UEFI (BIOS) setup and "F12" key for Boot Menu.

Further resources for Dell PC: [Drivers & Downloads](https://www.dell.com/support/home/en-us?app=drivers){:rel="nofollow"}

I hope this helps someone! :-)
