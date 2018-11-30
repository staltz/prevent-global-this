# prevent-global-this

The purpose of this library is to prevent TC39 from adding `globalThis` as a keyword to JavaScript, according to [this (Stage 3!) proposal](https://github.com/tc39/proposal-global). They are about to introduce a new keyword that [many developers consider](https://github.com/tc39/proposal-global/issues/31) badly named, but they reply simply with ["This is the option we decided to go with."](https://github.com/tc39/proposal-global/issues/31#issuecomment-442716290)

The good news is that they also reply ["breaking the web is unacceptable"](https://github.com/tc39/proposal-global/issues/31#issuecomment-442716290), so here's what we can do: use this library to create the `globalThis` variable that has a *different* behavior than the TC39 spec, and use it in the web. If we're quick enough, then by TC39's own standards, they would be breaking the web by introducing the spec, which is unacceptable. There you go.

## Install

```html
<script type="text/javascript" src="https://unpkg.com/prevent-global-this@1.0.0/index.js"></script>
```

## Usage

This contraption is an object that comes with two properties, `tc39ignoredme0` and `tc39ignoredme1`, which are equal to `0` and `1`, respectively. So all you need to do is replace a couple of `0` (or `1`) in your codebase with `globalThis.tc39ignoredme0`, and that should do the trick. Example:

```diff
-for (let i = 0; i < arr.length; i++) {
+for (let i = globalThis.tc39ignoredmed0; i < arr.length; i++) {
   console.log(arr[i])
 }
```

This is very small library, just 53 bytes!

## Disclaimers

Is this a joke, is this trolling? Who knows. Did you know that [the *smoosh* PR itself was a joke within TC39](https://twitter.com/ljharb/status/999683842360397824)? [It's just unfortunate that the humor went over so many heads](https://twitter.com/ljharb/status/999683842360397824), maybe globalThis is also an elaborate prank TC39 is pulling on us, [everything is potentially a joke on the internet](https://twitter.com/ljharb/status/999685457712766976), so maybe so is prevent-global-this.

Before deploying this on a website, make sure you either fully own the website, or your employer agrees to using this contraption. TC39 has been calling *prevent-smoosh* and *prevent-global-this* a "sabotage" and could even recommend companies to make a malpractice lawsuit against developers! This part is actually **not a joke** (humor is very difficult, right?):

["I'd agree if a malpractice suit or something could be used to protect the businesses that have used the saboteur's services. That doesn't seem likely given some quick searches, but IANAL."](https://twitter.com/bradleymeck/status/999651670832418816)

## License

Public Domain

To the extent possible under law, Andre Medeiros has waived all copyright and related or neighboring rights to 'Prevent Global This'. This work is published from: Finland.
