---
title: 'Review: Total TypeScript Beginner’s TypeScript Tutorial'
description: The free Beginner's TypeScript Tutorial from Total TypeScript is a hands-on overview of foundational TypeScript concepts.
date: 2023-01-24
tags: ['typescript']
---

I’ve used TypeScript in production and side projects with frameworks like React and Vue, but have never taking an actual course. Instead, I learned on-the-job using the codebase, my experience with types from C#, and documentation and online resources. When I saw that [Matt Pocock](https://twitter.com/mattpocockuk) was [releasing a TypeScript course](https://www.totaltypescript.com/), I decided to check it out. I knew of Matt from his work with the [Stately.ai](http://Stately.ai) team and open source projects.

I completed the free [Beginner’s TypeScript Tutorial](https://www.totaltypescript.com/tutorials/beginners-typescript). There is also a free Zod Tutorial with 10 exercises I plan to do next. The website contains tips and articles about TypeScript, and Matt creates videos on [YouTube](https://www.youtube.com/@mattpocockuk) and Twitter. There’s also a [Discord community](https://www.totaltypescript.com/discord) to interact with other’s taking the course. Matt even [built a VS Code extension](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator) to help with TypeScript errors! There is a lot here to be excited about.

## About the Tutorial

The Beginner’s TypeScript tutorial contains 18 lessons, all with problems and solutions presented in an IDE with accompanying video explanations. The goal is to make both the Vitest tests and the TypeScript checker happy with your own solutions. Topics covered include:

- Type Annotations
- Named Types & Interfaces
- Function Parameter and Return Types
- Union Types
- Generics & Type Variables
- Utility Types
- Typing Async Requests, Dynamic Keys, Errors, and Callbacks

This provides a strong foundation for many situations you’ll encounter with TypeScript in a codebase. I was able to complete the course in an afternoon with my existing TypeScript experience. It may take true beginners longer to find solutions and spend time absorbing the material.

## My Review

I missed the pre-sale window for the Pro Workshops, and after completing the Beginner’s TypeScript Tutorial I am kicking myself for that. I found the Beginner’s Tutorial a great way to add context to my existing TypeScript knowledge in a structured way.

I enjoyed the hands-on, testing-based format of the tutorial and appreciated that Matt encourages you to find the answers yourself before revealing the solution.

I liked that the examples used mirrored real-world code samples, and didn’t rely on random variables like `a` or `foo`. I also liked that he reviewed the multiple potential solutions, and provided guidance on why you’d choose one solution over another.

Sometimes it was difficult to know what to look for, and I ended up using Google vs the official TypeScript docs to get to a solution or find the correct terminology. For example, I knew you could use `&` to combine types, but didn’t know it was called an “Intersection Type” until I found a blog post that used the term. I did realize that the file names in the IDE have hints (for example, the file is `15-intersection.problem.ts` even though the lesson name is “Combining Types to Create New Types”). So, looking at the file name may help if you get stuck. Ultimately, having to investigate on my own was a realistic learning experience that mirrored a real-world developer workflow.

Even though I have experience with TypeScript, I definitely learned a few new things and will be signing up for the advanced Pro Workshops once available.

Here are five new fun things I learned about TypeScript while working through the tutorial:

1. If you set a parameter as optional using a union type such as `string | undefined`, you still have to pass the parameter as `undefined` to avoid an error.
2. Using the `as` keyword is called "casting" or ["type assertion"](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions), and is typically less type-safe than assigning a type.
3. How to use the [Index Signature syntax](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) for typing dynamic keys in an object.
4. You can use [`instanceof` to narrow a type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing), such as for error handling.
5. There are 20+ [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content) for combining, restricting, or otherwise altering existing types.

## Tutorial Process & Notes

I completed the course entirely in the site’s built-in IDE. I did pull down the GitHub codebase initially but found it was easier and more efficient to use the course UI. My process when completing the course was:

- Review the problem
- Try to solve based on my existing knowledge of TypeScript
- Look up documentation or Google for resources as needed
- Complete problem
- Review solution
- Write down the concept demonstrated by the solution, including links to any docs
- Create a new example of the concept in my notes to confirm understanding

Here are the notes I created during the course:

### Type Annotations

- Syntax for assigning a type to a variable
```tsx
const variable: type
```

### Object Types

- Syntax for assigning types to the properties in an Object
```tsx
const variable: {key: type, key: type}
```

### Named Type

- Using the `type` keyword to define a type to reference elsewhere
- Can also be exported
```tsx
type TypeName = {

key: type,
key: type
}
```

### Interface

- Alternative to `type` keyword, used to represent Objects
```tsx
interface InterfaceName = {
key: type,
key: type
}
```

### Optional Properties and Parameters

- use `?` following key to designate a property as not required
```tsx
const variable: {key: type, key?: type}

const myFunction = (param: type, param?: type)
/// required parameters must go first
```

### Union Types

- type indicating that a value can be one or more types
- can be a primitive type, named type, or string literal

```tsx

type Id = number | string
type EventCategory = 'conference' | 'meetup' | 'stream' | 'workshop'
```

### Arrays

- use square brackets following type
- can be primitive or named type

```tsx
// primitve type array
const namesArray: string[] = ['john', 'amanda', 'jane']

// array of named Event type

interface Event {
id: string,
title: string,
description: string,
url: string,
date: string,
location: string,
}

const eventsArray: Event[] = [
{
id: 1,
title: 'my event',
...
```

### Generics

- [Generics docs](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- Provides variables to types
- Uses <> syntax following the type
- Alternative to using [] for arrays

```tsx
const events: Array<Event>
const ids: Array<number>
```

### Function Return Type

- Add type after () in function declaration

```tsx
const returnString = (): string => {

return 'string'
}
```

### Promises

- Use the Promise type generic and pass in the expected return type after the promise resolves

```tsx
const asyncGetUser = async (): Promise<User> => {

const data: User = await fetch('api/getUser').then((res) => {
return res.json()
})

return data
```

### Casting Type Assertions

- [Type Assertions docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- Overrides or changes the type of a variable
- less type safe than assigning
- Uses the `as` keyword or `<>` syntax

```tsx
// Assigning type will throw type error because missing required User properties
const myUser: User = {}

// Casting will not throw error, less type safe
const myUser = {} as User

// Can use casting to type return value of a data fetch

const asyncGetUser = async (): Promise<User> => {

const data = await fetch('api/getUser').then((res) => {
return res.json()
})

return data as User
}
```

### More Generic Types with Variables

- Like with arrays, pass type to a type

```tsx
// Sets
const stringSet = new Set<string>()
stringSet.add('hello')

// Maps
const stringNumberMap = new Map<string, number>()
stringNumberMap.set('id', 1)
```

### Record Type

- [Record Type docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- Used to designate key and value types of an object
- Helpful when we have dynamic keys in an object

```tsx
const contactEmails: Record<string, string> = {
'jane': 'jane@address.com',
'adam': 'adam@address.com'
}

// can add new key-value pair with dynamic key at runtime type safely
contactEmails['sue'] = 'sue@address.com'
```

### Index Signature

- [Index Signature docs](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
- Used to designate the type of a key in an object, alternative to Record Type
- Can also be used inside an Interface

```tsx
const contactEmails: {[name: string]: string} = {
'jane': 'jane@address.com',
'adam': 'adam@address.com'
}

interface ContactEmails {
[name: string]: string
}

const myContacts: ContactEmails = {}
```

### Handling Error Types

- TypeScript will only let you catch errors with type unknown or any
- We can use `any` or coerce with `e as Error` but safest option is to check for Error type before handling
- [instanceof narrowing docs](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)

```tsx
} catch (e) {
  if (e instanceof Error) {
    return e.message;
  }
}
```

### Extending Interfaces

- Use the `extends` keyword to inherit properties from a base interface
- Can only be used with Interfaces, not Types

```tsx
interface User {
id: string,
name: string,
isAdmin: boolean
}

/// also includes id, name, and isAdmin
interface Admin extends User {
adminLevel: 'admin' | 'super-admin',
adminKey: string
adminKeyLastUse: Date
}
```

### Intersection Types

- [Intersection Types docs](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
- Use an `&` to create a new type with all the properties of two different Object types
- Can use `{}` and `[]` as needed to add structure to the new type

```tsx
interface User {
id: string,
name: string,
isAdmin: boolean
}

interface AdminDetails {
adminLevel: 'admin' | 'super-admin',
adminKey: string
adminKeyLastUse: Date
}

/// creates type with User properties and AdminDetails
/// object as a property

type UserAndAdminDetails = User & {adminDetails: AdminDetails}

```

### Pick Type

- [Pick Type docs](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content)
- Constructs a new type with only the selected properties of an existing interface
- Properties are required, other utility types can make properties required or optional as needed

```tsx
interface User {
id: string,
name: string,
isAdmin: boolean
}

type UserDetails = Pick<User, "id" | "name">
```

### Omit Type

- Used to create a new type without the selected properties of an existing interface
- Does not provide autocompletion

```tsx
interface User {
id: string,
name: string,
isAdmin: boolean
}

type UserDetails = Omit<User, "isAdmin">
```

### Callback Function Types

- Used to type a function that is passed as a parameter
- Defines any argument types and the return type
- Can be used inline or extracted as its own type
- [Callback Types docs](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#callback-types)
- Can be used with Promise<> for async functions
- Can be extracted into their own type

```tsx
// inline callback function type
const changeAdminStatus = (adminId: string, newStatus: boolean, 
updateUser: (id: string, property: string, value: string | boolean) => void) {

updateUser(adminId, "isAdmin", newStatus)

}

// async callback function type inline and extracted example

type UpdateAdminStatus = (id: string, newStatus: boolean) => Promise<boolean>

const getThenToggleAdminStatus = async (adminId: string,
getAdminStatus: (id: string) => Promise<boolean>,
updateAdminStatus: UpdateAdminStatus
): Promise<boolean> => {
const currentAdminStatus: boolean = await getAdminStatus(adminId);

const updatedAdminStatus: boolean = await updateAdminStatus(currentAdminStatus);

return updatedAdminStatus
}
```