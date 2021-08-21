---
title: Install Tailwind's JIT compiler into Laravel
description: How to install Tailwind's JIT with Laravel mix.
date: 2021-08-21T00:00:00.000Z
---

# Introduction

Tailwind recently released their JIT compiler, which much more flexibility
when encountering edge cases during your development. It allows you to use
class names like `bg-[#00acee]`, `w-[200px]` and so on.

Let's see how you can integrate this into your Laravel setup.

# Update
```sh
$ npm install -D tailwindcss@latest
```

    
```json
    "scripts": {
        "hot": "mix watch --hot" // [tl! remove]
        "hot": "TAILWIND_MODE=watch mix watch --hot" // [tl! add]
    },
```
