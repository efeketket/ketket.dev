---

title: Settings
sidebar_label: Settings
sidebar_position: 2

---


# ⚙️ Settings for Ketket's Graves

Customize the behavior of the Graves datapack using built-in commands.

---

## 🛡️ Grant Admin Access

To access settings, you must have admin permission. Use:

```mcfunction
/tag @s add grave_admin
```

---

## 📋 Open Settings Menu

Open the configuration menu by running:

```mcfunction
/trigger ket.settings
```

---

## 🔧 Available Settings

* **Lava Immunity**
  Prevents graves from burning when players die in lava.

* **Grave Protection**
  Only the **owner** of the grave can retrieve items from it.

* **Grave Cooldown**
  Automatically removes graves after a set duration.
  Default: **5 minutes**
  Change duration with:

  ```mcfunction
  /trigger setcooldown set <minutes>
  ```
