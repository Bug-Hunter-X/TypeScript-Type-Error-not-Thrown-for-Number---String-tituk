# TypeScript Type Error not Thrown for Number + String

This example demonstrates a subtle issue in TypeScript where type checking doesn't strictly prevent adding a number to a string.  The code compiles without errors, yet it produces an unexpected result, leading to runtime issues. 

The `add` function is declared to accept two numbers and return a number, but the caller passes a string as the second argument. While this is logically incorrect, TypeScript does not throw a compile-time error.  Instead, it performs string concatenation. This highlights a potential weakness in the type system and the importance of comprehensive testing.