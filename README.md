# Test SP2

## 1. Reflections

### 1.1 Computer Mouse

_Identify the types of testing you would perform on a computer mouse, to make sure that it is of the highest quality._.

1. Hardware Test
2. Electricity Test
3. Software Test
4. Durability Test
5. Usability Test
6. Compatibility Test
7. Performance Test

### 1.2 Catastrophic Failure

"_Find a story where a software system defect had a bad outcome. Describe waht happened. Can you identify a test athat would have prevented it?_"

The [Therac-25](https://en.wikipedia.org/wiki/Therac-25) was a radiation therapy machine produced by Atomic Energy of Canada Limited (AECL) in 1982 after the Therac-6 and Therac-20 units (the earlier units had been produced in partnership with CGR of France). It was involved in at least six accidents between 1985 and 1987, in which patients were given massive overdoses of radiation, approximately 100 times the intended dose. These accidents highlighted the dangers of software control of safety-critical systems, and they have become a standard case study in health informatics and software engineering. The software was written in assembly language for a custom CPU.

## 3. Investigation of Tools

### _JUnit5 Investigate JUnit 5 (Jupiter). Explain the following, and how they are useful.

#### `@Tag`
- `@Tag` allows you to categorize your test methods or classes using one or more tags.
- Useful for organizing and filtering tests based on their characteristics.
- Tests can be selectively run based on their tags, which is helpful for running specific groups of tests, like smoke tests or integration tests.
#### `@Disabled`
- `@Disabled` is used to temporarily disable a test method or a test class.
- Tests marked with this annotation will not be executed.
- Useful for skipping certain tests without removing them from the codebase, e.g., when working on a feature that breaks existing tests.
#### `@RepeatedTest`
- `@RepeatedTest` allows you to repeat a test method a specified number of times.
- Useful for testing the same functionality multiple times with different inputs or configurations.
- Helps identify flaky tests (tests that fail sporadically) and ensures consistent results across multiple iterations.
#### `@BeforeEach`, `@AfterEach`
- `@BeforeEach` and `@AfterEach` annotations specify methods that run before and after each test method, respectively.
- Useful for setting up and tearing down the test environment, ensuring each test starts with a clean state.
#### `@BeforeAll`, `@AfterAll`
- `@BeforeAll` and `@AfterAll` annotations specify methods that run once before and after all test methods in a test class, respectively.
- Useful for performing one-time setup or cleanup operations, such as initializing resources shared among multiple test methods.
#### `@DisplayName`
- `@DisplayName` allows you to provide a custom name for a test method or class.
- This name is used in test reports, enhancing test case readability.
- Helps improve the understanding of test cases in reports.
#### `@Nested`
- `@Nested` allows you to define inner classes within a test class, grouping related test methods.
- Useful for organizing test code, making it more modular and manageable.
#### `assumeFalse`, `assumeTrue`
- `assumeFalse` and `assumeTrue` are methods for making assumptions about the system's state before running a test.
- These methods allow you to conditionally skip a test if specified assumptions aren't met.
- Useful for skipping tests that aren't relevant in certain environments or conditions.

## 4 _Mocking Frameworks_
### _Investigate mocking frameworks for your preferred language. Choose at least two frameworks, and answer the questions. (One could be Mockito, which we saw in class.)_

### Similarities between Jest and Sinon:

- **Mocking and Spying**:
   - Both Jest and Sinon allow you to create mocks and spies for functions and objects. You can stub functions, track calls, and assert on interactions.

- **Functionality**:
   - They both support common mocking functionalities, such as setting return values, throwing exceptions, and controlling the behavior of mocked functions.

- **Community and Documentation**:
   - Jest and Sinon have active communities and extensive documentation. You can find plenty of resources and examples for both.

- **TypeScript Support**:
   - Both libraries can be used with TypeScript projects, although you may need to provide type annotations for TypeScript-specific cases.

### Differences between Jest and Sinon:

- **Integration**:
   - Jest is a complete testing framework that includes mocking, assertion, and test runner functionalities out of the box. It's designed for simplicity and comes pre-configured for testing JavaScript and TypeScript projects.
   - Sinon, on the other hand, is primarily a standalone library for mocking and spying. While it's versatile and can be used with different testing frameworks, you may need to set up other aspects of your test environment separately.

- **API Style**:
   - Jest has its own mocking API, which is tightly integrated with its test runner. It uses functions like `jest.fn()` and `jest.spyOn()`.
   - Sinon follows a more traditional JavaScript mocking API, with functions like `sinon.stub()` and `sinon.spy()`.

- **Mocks vs. Spies**:
   - Jest often encourages the use of mock functions (created with `jest.fn()`) for stubbing and spying.
   - Sinon provides more fine-grained control and differentiation between mocks and spies, allowing you to create stubs, spies, and mocks separately.

- **Ecosystem**:
   - Jest has a broader ecosystem, including snapshot testing, test runners, and built-in assertion libraries. It's a one-stop solution for testing.
   - Sinon is more focused on mocking and spying. You may need to integrate it with other testing tools and libraries to achieve a complete testing solution.

### Preference:

Your preference between Jest and Sinon depends on your project's requirements and your team's familiarity with these tools:

- **Jest** is an excellent choice if you prefer an integrated testing solution with minimal setup. It's especially suitable for projects where simplicity and convenience are essential. Jest's mocking capabilities are tightly coupled with its testing framework.

- **Sinon** is a versatile choice if you need more fine-grained control over mocking and spying or if you're already using another testing framework. It's also beneficial when you require mocking in non-test contexts (e.g., stubbing HTTP requests in production code).
