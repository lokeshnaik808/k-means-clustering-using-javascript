# k-means-clustering-using-javascript
An implementation of k-means clustering using Typescript(basically Javascript)

Here a sample dataset is given as an array(elements can be added and removed). Preffered dataset can also be defined.

For example purpose the value of k i.e number of clusters given is 3. This also can be changed as there is a dedicated function for creating any number of cluster as number of cluster to be generated can be passed as a parameter to this function.

Flow of algorithm as follows
1. Random points i.e mean points which are in the range of the dataset are created. The number of points created will be equal to the number of clusters.
2. Distance of each element of dataset from the random points i.e are means are found out and each element is assigned to the mean which is closest to it.
3. after the inital assignment, the cluster mean is found out and these means are taken as the new mean points.
4. All the elements are again assigned as per these new means in the next recursion.
5. If two consecutive recursions have same clusters, the algorithm terminates.

P.S- This is just a version 1. a much more sophisticated algorithm will be built in next version. Errors like NaN and its effects on the algorithm will be eliminated.
