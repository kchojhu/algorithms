Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

First Pass:

( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4

( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

Optimization:
Look at bubbleSortShort.  If swap does not happen in the iteration then the array is already sorted

Bubble Sort works best on arrays that are mostly sorted.  On the best case scenario

[5, 1, 2, 3, 4]

Then it would only require O(N) to sort since only the first index needs to be sorted