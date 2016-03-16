# Jails 
<!--{h1:.massive-header.-with-tagline}-->

> AMD & Event Driven Micro-Framework

A simple way to abstract your applications using the same DOM event way to communicate all the parts of your application.

## Introduction

The most known way to abstract web applications seems to be all about **MVC** architecture.
It is a widely accepted architecture in *Back-End* environment and desktop applications. But it turns out that is pretty much hard to actually maintain that pattern on *Front-end* environment and it does not scale using that closed concept of communication of these 3 structures on Javascript and Web environment.

Jails tries to change paradigm, it focus on `modular` architecture, and uses a very known way by all Javascript programmers to wire up your modules: **Events**.

## Architecture

Jails follows the **Atomic Design** principles in a different way, splitting your application in **4** abstractions.
Each one has your tasks and goals, together they will compose your ecosystem.

![ecosystem](docs/assets/ecosystem.png)

Please, visit all of them by sidebar menu to know more about each one, and how to they interact with each other.
