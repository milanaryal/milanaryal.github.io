---
title: "Direct linking to your files on Dropbox, Google Drive and OneDrive"
date: 2015-10-05T07:58:46+05:45
redirect_from: "/2015/direct-linking-to-your-files-on-dropbox-google-drive-and-onedrive/"
---

#### Force a file or folder to download from cloud storage drive and skip the web viewer.

A direct link is a web address (URL) that lets you link directly to a file. This is different from a regular web link, which will direct the user to a cloud storage drive page.

Direct links end with the file's extension type. Therefore, if you are linking to a Microsoft Word document, a direct link will end with `*.doc`. When a user clicks on the link, a pop-up window will prompt the user to either open the file in Microsoft Word or download the file onto their computer.

Direct linking is a great feature to use when sending a file to someone without directing them to cloud storage drive. Direct linking can also be used to host images or files for your website or blog. In some cloud storage drive direct linking is only available for individual files and is unavailable for folders. A link to a folder will always be a web address of a cloud storage drive page.

You can get a direct link by right-clicking on a file and selecting 'Share'. There are a few simple modifications you can make to cloud storage drive when sharing link URLs to ensure browsers handle your cloud storage drive links the way you want.

### Dropbox direct download links

To cause the browser to download a file or folder rather than display it Dropbox web viewer, you can use `dl=1` as a query parameter in your URL. For example:

```text
https://www.dropbox.com/s/FILE_ID/filename.extension
```

Becomes:

```text
https://www.dropbox.com/s/FILE_ID/filename.extension?dl=1
```

Note that the original share link URL may contain query string parameters already (e.g. `dl=0`).

If you only want to bypass the preview page on Dropbox and allow your browser to directly render your files, use `raw=1` as a query parameter in your URL.

**See also:** [Hosting images with Dropbox on your website]({% post_url 2015-08-19-hosting-images-with-dropbox-on-your-website %})

---

### Google Drive direct download links

Grab the file ID from the original link (get the share link from the sharing settings) and append it to the end of the new link. With the new format, any link you share will automatically download to your recipient's computer. For example:

```text
https://drive.google.com/file/d/FILE_ID/edit?usp=sharing
```

Becomes:

```text
https://drive.google.com/uc?export=download&id=FILE_ID
```

Above links do not works for Google Docs, Google Presentations... there's other way to do it.

#### Direct download links for Google Documents

Google Documents direct download links format is a little different.

**Google Docs:** Get the share link of a Google document, and replace `/edit` with `/export` and add the file format that the document should be saved as and your download link is ready. For example:

```text
https://docs.google.com/document/d/FILE_ID/edit?usp=sharing
```

Becomes:

```text
https://docs.google.com/document/d/FILE_ID/export?format=doc
https://docs.google.com/document/d/FILE_ID/export?format=pdf
```

The above links will now download the same Google document in Word (.docx) and PDF formats. You can also use "txt", "html" and "odt" for the download format.

**Google Presentations:** Similarly for Google Presentations get the original shared links as the following format:

```text
https://docs.google.com/presentation/d/FILE_ID/edit?usp=sharing
```

Becomes:

```text
https://docs.google.com/presentation/d/FILE_ID/export/pptx
https://docs.google.com/presentation/d/FILE_ID/export/pdf
```

The above direct links will download the same presentation deck in PowerPoint (.pptx) and PDF formats.

**Google Spreadsheets:** Now for Google Spreadsheet, make the sheet Public (or Anyone with a link) and make a note of the shared URL. For example:

```text
https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
```

Becomes:

```text
https://docs.google.com/spreadsheets/d/FILE_ID/export?format=xlsx
https://docs.google.com/spreadsheets/d/FILE_ID/export?format=pdf
```

Note these Google Drive direct links seem to be subject to quotas. So not ideal for public/massive sharing.

---

### OneDrive direct download links

Get the share link of a file on OneDrive, and replace `redir?` to `download?`. For example:

```text
https://onedrive.live.com/redir?resid=FILE_ID
```

Becomes:

```text
https://onedrive.live.com/download?resid=FILE_ID
```
