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

### Q: _JUnit5_

A:
Improved Code Quality: By encouraging to writing tests first, which leads to more reliable and maintainable code.

Early Issue Detection: It helps catch bugs and issues early in the development process, reducing the cost of fixing them later.

Clear Requirements: Forces us to define clear requirements and specifications for their code.

Documentation: Tests serve as documentation and examples of how code should be used.

Confidence: We gain confidence in our code's correctness because it's continuously tested.

Refactoring Safety: Makes it safer to refactor code, knowing that tests will catch regressions.

Collaboration: It fosters collaboration by providing a clear understanding of code behavior.

Productivity: In the long run, it can lead to faster development and fewer defects.

### Q: _Mocking Frameworks_

A:
Initial Learning Curve: It may be challenging to adopt initially, as it requires a mindset shift and learning new practices.

Time-Consuming: Writing tests before code can be time-consuming, especially for complex systems.

Maintenance Overhead: Maintaining a large suite of tests can be cumbersome and time-intensive.

Resistance: Some team members may resist to this development-style due to the perceived added workload.

Test Dependency: Tests can become overly dependent on implementation details, making refactoring harder.

Incomplete Coverage: Achieving complete test coverage can be difficult, leading to potential blind spots.

Continuous Discipline: Staying disciplined in writing tests for every piece of code can be challenging.
