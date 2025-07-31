---
slug: datapack-installation
title: How to Install a Datapack?
authors: [ketket]
tags: [installation, datapack, minecraft]
---

# How to Install a Datapack?

Installing a datapack is quite simple. Here is a step-by-step guide:

## Required Files

- Minecraft Java Edition
- Datapack `.zip` file
- Access to your world save folder

## Installation Steps

### 1. Find Your World Folder

**Windows:**
```
%appdata%/.minecraft/saves/[World Name]/datapacks/
```

**Mac:**
```
~/Library/Application Support/minecraft/saves/[World Name]/datapacks/
```

**Linux:**
```
~/.minecraft/saves/[World Name]/datapacks/
```

### 2. Copy the Datapack

1. Download the datapack `.zip` file
2. Copy it into the `datapacks` folder
3. **IMPORTANT**: Do not unzip the file, leave it as `.zip`

### 3. Enable In-Game

1. Open Minecraft
2. Enter your world
3. Type `/reload` in the chat
4. Check with `/datapack list`

## Troubleshooting

**Datapack not showing up:**
- Is the file in `.zip` format?
- Is it in the correct folder?
- Did you run `/reload`?

**Getting errors:**
- Is your Minecraft version compatible?
- The datapack might be corrupted, try downloading again

## Important Notes

- Datapacks only work on Java Edition
- They do NOT work on Bedrock Edition
- Installation is the same for servers 