# A Disorganized Complex

## Overview

Mawj is a product that establishes a new sports ecosystem.

## Features

- Collection and measurement of statistical data
  - Match results visualize the details quantitatively
- Video Release
  - Several tens of minutes of data are uploaded, which are then segmented and
    edited by deep learning.
- Open Practice Announcements
  - Currently, most are recruited at "X" or contacted through their personal
    "LINE".
  - By sharing their activities on the public platform of X (formerly Twitter),
    they secretly hoped to attract an influx of inexperienced people.
  - Provides a unique and impressive UI with practice information organized like
    a calendar.
- Broadcasting of tournaments
  - It's evident that the viewership is low. We are doing this to improve it in
    the future.
- Owned Media
  - The developer myself does not read other people's blogs, but some people may
    read them.
  - They are also allowed to link to their own Youtube and homepages.

### Objective

We aim to support niche sports and activities indirectly. The popularization of
niche sports is not inherently negative; however, it can sometimes stem from
ego. We simply want to let those who are not yet aware of such sports know about
them.

This sport could potentially become a new community for them.

Discovering this new opportunity is truly rewarding and will impact their lives
in various ways, both positive and negative.

## Business Issues

While the question of "Why are niche sports niche sports?" is valid, here we aim
to enumerate the practical challenges and issues we intuitively perceive.

- Nobody knows in the first place.
- Working people are busy.

Mawj is committed to providing new solutions to issues, not systems that make
existing systems more convenient.

### Concerns

This would be unnecessary if the SNS were to remain specific to a particular
sport. Mere dissemination of messages does not inherently yield the power to
effect change. This concern encompasses the apprehension of confining a group
accustomed to broadcasting information in a more public setting to a closed
environment. It is imperative to create value in the act of dissemination within
this environment. Indeed, there are a certain number of individuals who post
similar content on platforms such as Instagram, X, and Facebook. It may not be
crucial to provide a precise answer to the question "Why this service?"

### Hypothesis

> "If the sport becomes famous, everyone will continue to do it."

Probably no. However, while fame alone will not increase the number of
competitors, without fame there will be no increase in the number of
competitors.

> "It can be popularized by acquiring elements (facilities and software) that
> other major sports have."

This is as close to No as possible. Constructing an exceedingly large stadium
for baseball, soccer, etc., in an urban area would understandably lack public
support and likely result in a business failure.

## Domain Scope

To be clear, we are not trying to redefine niche sports here. We are simply
listing the sports we are involved in. In other words, we do not intend to label
them as "minor sports".

```rust
enum NicheSports {
    Cricket,
    Indiaca,
    Kabaddi,
    SepakTakraw,
    SportClimbing,
    Squash,
    WaterPolo,
}
```

## Contributing

We appreciate your help!

To contribute, please read our contributing instructions(wip).
