---
title: "Dell Inspiron 7370 Laptop configurations for Windows 11"
date: 2021-06-25 11:00:00 +05:45
excerpt: "Learn how to configure Dell Inspiron 13 7000 7370 Laptop for Microsoft Windows 11 operating system."
---

Last night (June 24, 2021 8:45-9:45PM GMT+05:45), Microsoft unveiled next generation Windows 11 with following minimum system requirements.

| Windows 11          | Minimum system requirements                                                                                 |
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

### Configure Dell Inspiron 7370 Laptop for Windows 11

> [Dell Inspiron 13 7000 7370 Laptop](https://www.amazon.com/Dell-Inspiron-7000-7370-Laptop/dp/B0764N2QL3){:rel="nofollow"} -- (13.3" Touchscreen IPS FHD (1920x1080), 8th Gen Intel Quad-Core i5-8250U/i7-8550U, 256/512GB SSD, 8/16GB DDR4, Backlit Keyboard, ..[detailed specs](https://www.cnet.com/products/dell-inspiron-7370-13-3-core-i7-8550u-16-gb-ram-512-gb-ssd/){:rel="nofollow"}) is compatible for Windows 11

Restart laptop and keep pressing F2 until BIOS setup will appear. Then setup following configurations:

**General**

- Boot Sequence > Enable UEFI
- Advance Boot Options > Disable Legacy Option ROMS

**Secure Boot**

- Enable

**Security**

- Enable PTT Security

**[Note](https://stackoverflow.com/questions/64075223/are-intels-ptt-and-tpm-equivalent){:rel="nofollow"}**: The Intel PTT (Platform Trust Technology) fully supports all Microsoft's requirements for firmware TPM (Trusted Platform Module) version 2.0 specification.

On Windows, you can check TPM by running `tpm.msc` command prompt.

With the above setup, your PC (Dell Inspiron 7370) meets all the system requirements for Windows 11.

#### [Summary](https://youtu.be/n6unGwtpbEc?t=110){:rel="nofollow"} of config for Windows 11

- Boot Mode: UEFI
- Secure Boot: Enabled
- Legacy ROM: Disabled
- Boot Sequence: Set the Hard/SSD Drive (with the Operating System installed) as the First Boot Device
- SATA Operations: AHCI (RAID ON if system has a RAID CARD or if RAID is configured on the system)

**Tip**: While starting/restarting your PC press "F2 for BIOS setup" and "F12 for Boot Menu"

[Drivers & Downloads](https://www.dell.com/support/home/en-us?app=drivers){:rel="nofollow"}

Good Luck :-)
