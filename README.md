<h1 align="center">
  <a href="https://github.com/SugarDarius/react-use-algos">Welcome to React Use Algos (unmaintained)</a>
</h1>

<p align="center">
  <img width="200" align="center" src="https://raw.githubusercontent.com/SugarDarius/react-use-algos/master/medias/img/logo.png" />
</p>

<p align="center">
  <img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/sugardarius/react-use-algos?style=flat-square" />
</p>
<p align="center">
  <a href="https://github.com/SugarDarius/react-use-algos/actions">
    <img alt="ci" src="https://github.com/SugarDarius/react-use-algos/workflows/Release%20CI/badge.svg?branch=master&event=push" />
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" />
  </a>
  <a href="https://sugardarius.github.io/react-use-algos">
    <img alt="Website" src="https://img.shields.io/website?down_color=red&down_message=down&label=storybook&style=flat-square&up_color=blue&url=https%3A%2F%2Fsugardarius.github.io%2Freact-use-algos" />
  </a>
</p>

<p align="center">
  <img alt="npm package latest version (scoped)" src="https://img.shields.io/npm/v/@sugardarius/react-use-algos?label=package%20version@latest&style=flat-square" />
  <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/sugardarius/react-use-algos?style=flat-square" />
  <a href="https://www.npmjs.com/package/@sugardarius/react-use-algos">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/@sugardarius/react-use-algos?style=flat-square" />
  </a>
  <a href="https://github.com/SugarDarius/react-use-algos/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/SugarDarius/react-use-algos?style=flat-square" />
  </a>
</p>

<p align="center">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/SugarDarius/react-use-algos?style=flat-square" />
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/sugardarius/react-use-algos?style=flat-square" />
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr-raw/sugardarius/react-use-algos?style=flat-square" />
  <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed-raw/sugardarius/react-use-algos?style=flat-square" />
</p>

<p align="center">
  <a href="https://twitter.com/azeldvin">
    <img alt="say" src="https://img.shields.io/badge/say-hi!-blue?style=flat-square" />
  </a>
  <a href="https://twitter.com/azeldvin">  
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/azeldvin?style=social" />
  </a>
</p>

## Greetings 👋
`React Use Algos` is an [npm](https://www.npmjs.com/) package which proposes you a library of user oriented [React Hooks](https://reactjs.org/docs/hooks-intro.html) to use some collections, formulas and algos 💪🏻

This project is made to be open source and driven by the community so please feel free to send your feed back, ideas and of course your PRs are welcome 🙏🏻

And, it is written with [TypeScript](https://www.typescriptlang.org/) and released with [GitHub Actions](https://github.com/features/actions) 🤗

## First things first 😜
Let's begin by installing the package:

```sh
npm install --save @sugardarius/react-use-algos
```

## Which hooks are availables?
In this project you can find theses, I hope, useful hooks!<br />
If you need a Storybook is available [here](https://sugardarius.github.io/react-use-algos/) 😊

### Collections
Collections hooks are implementations of data structures:

* [useBinaryHeap](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-binary-heap.hook.md): implementation of the [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap) (max or min)
* [useMap](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-map.hook.md): a tracking of a map (here as [literal object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects))
* [useQueue](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-queue.hook.md): an implementation of the [Queue](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues#Queues) data structure in [FIFO](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting#FIFO) method
* [useSet](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-set.hook.md): a tracking of a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [useStack](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-stack.hook.md): an implementation of the [Stack](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues#Stacks) data structure in [LIFO](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting#LIFO) method
* [useHashTable](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-hash-table.hook.md) : an implementation of the [Hash Table](https://en.wikipedia.org/wiki/Hash_table) data structure

### Algos
Algos hooks are implementation of algorithms:

* misc:
  * [useMinReachJumps](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-min-reach-jumps.hook.md): an implementation of a misc algo: `min jump`
  * [useTankCapacity](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-tank-capacity.hook.md): an implementation of a misc algo: `tank capacity`
* random:
  * [useShuffle](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-shuffle.hook.md): an implementation of the `shuffle` algo
* search:
  * [useBinarySearch](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-binary-search.hook.md): an implementation of the `binary search` algo
  * [useLinearSearch](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-linear-search.hook.md): an implementation of the `linear search` algo
  * [useInterpolationSearch](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-interpolation-search.hook.md): an implementation of the [`interpolation search`](https://en.wikipedia.org/wiki/Interpolation_search) algo.
* sorting:
  * [useBubbleSort](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-bubble-sort.hook.md): an implementation of the `bubble sort` algo
  * [useQuickSort](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-quick-sort.hook.md): an implementation of the `quick sort` algo
  * [useSelectionSort](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-selection-sort.hook.md): an implementation of the `selection sort` algo
* generate:
  * [useRange](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-range.hook.md): an implementation for the generation of a range of integers
* compute:
  * [usePascalTriangle](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-pascal-triangle.hook.md): an implementation of the [Pascal Triangle](https://en.wikipedia.org/wiki/Linear_interpolation) algorithm
  * [useGCD](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-gcd.hook.md): an implementation of the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) to compute iteratively the greatest common divisor (GCD)

### Formulas
Formulas hooks are implementations of some well known formulas:

* [useLerp](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-lerp.hook.md): an implementation of the precise [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) formula
* [useRadianToDegrees](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-radian-to-degrees.hook.md): an implementation to compute an angle as radian in degrees
* [useDegreesToRadian](https://github.com/SugarDarius/react-use-algos/blob/master/docs/use-degrees-to-radian.hook.md): an implementation to compute an angle as degrees in radian

## Want to help? 😍
If you want to make any controbutions to this projet to fix a bug, add a new hook or improve the documentation your are welcome 🙏🏻<br />
You can read up our [contributing guidelines](https://github.com/SugarDarius/react-use-algos/blob/master/CONTRIBUTING.md).

## Special thanks 👏
Many thanks to the [react-use](https://github.com/streamich/react-use) project from [streamich](https://github.com/streamich) which has inspired this project.<br />
We can do more with [React Hooks](https://reactjs.org/docs/hooks-intro.html)! 💪🏻

<p align="center">
    This project is made with ♥ by <a href="https://github.com/SugarDarius">SugarDarius</a>
</p>
